function submit_form() {
    if (localStorage) {
        //To clear the localstorage
        //window.localStorage.clear();
        // Add an event listener for form submissions
          document.getElementById('syook_form').addEventListener('submit', function() {
          var set_key_name = 'set_title' + localStorage.length;
          var title_val = document.getElementById('title').value;
          var description_val = document.getElementById('description').value;
          var array_val = [];
          for ( var i = 0, length = localStorage.length; i < length; ++i ) {
              var get_key_name = window.localStorage.key(i);
              //To get the value from local storage
              var get_key_val = window.localStorage.getItem(get_key_name);
              //To all value in single array
              array_val.push(get_key_val);
          }
          if (title !='' && array_val.includes(title_val) == false && description_val != '') {
            const user = { 'title': title_val, 'description': description_val};
            //To store the value ins local storage. Data is saved in JSON format
              window.localStorage.setItem(set_key_name , JSON.stringify(user));
              return true;
          } else {
              //Error: When no title & description is given or same title is given
              alert("Error: Check title and desc");
          }
        });
      } else {
          alert("Your brower don't support localstorage");
    }
}
function print_list() {
    for ( var i = 0, length = localStorage.length; i < length; ++i ) {
        var get_key_name = window.localStorage.key(i);
        var get_key_val = window.localStorage.getItem(get_key_name);
        if (typeof get_key_val !== 'undefined') {
            get_val = JSON.parse(get_key_val);
            //To create and add data in element dt
        }
        //To show thw data in form of list
        var dt = document.createElement("dt");
        var dd = document.createElement("dd");
        var content_title = document.createTextNode(get_val.title);
        var content_desc = document.createTextNode(get_val.description);
        dt.appendChild(content_title);
        dd.appendChild(content_desc);
        document.getElementById("description_list").appendChild(dt);
        document.getElementById("describe").appendChild(dd);
    }
}