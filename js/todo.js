function ajax() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      var response = JSON.parse(this.responseText);

      var todo = response;
      console.log(todo);
      var output = "";
      var taskcomp = "";
      var taskuncomp = "";
      output += `<tr>`;
      output += `<th>  </th>`;
      output += `<th> Title </th>`;
      output += `<tr>`;
      for (i = 0; i < todo.length; i++) {
        if (todo[i].completed == true) {
          output += `<tr class="table-danger"  >`;
          output += `<td><input type="checkbox" checked=true onclick="return false"></td>`;
          output += `<td style="text-decoration:line-through"> ${todo[i].title} </td>`;
          output += `</tr>`;
        } else if (todo[i].completed == false) {
          output += `</tr>`;
          output += `<td class="cells"><input type="checkbox" class="check"></td>`;
          output += `<td> ${todo[i].title} </td>`;
          output += `</tr>`;
        }

        if (todo[i].completed == true) {
          taskcomp += `<tr style="background-color: peachpuff;">`;
          taskcomp += `<td><input type="checkbox" checked=true onclick="return false"></td>`;
          taskcomp += `<td> ${todo[i].title} </td>`;
          taskcomp += `</tr>`;
        }

        if (response[i].completed == false) {
          taskuncomp += `<tr>`;
          taskuncomp += `<td class="cellsuncomp"><input type="checkbox" class="checks"></td>`;
          taskuncomp += `<td> ${todo[i].title} </td>`;
          taskuncomp += `</tr>`;
        }
      }
      document.getElementById("table").append(output);
      document.getElementById("table").innerHTML = output;
      document.getElementById("table").style.border = "2px solid black";

      var checkedlist = [];
      let counter = 0;
      $(document).ready(() => {
        $(".cells").on("change", ":checkbox", function () {
          var rowIndex = this.parentNode.rowIndex + 1;
          const promise = new Promise(function (resolve, reject) {
            counter = $(":checkbox:checked").length - 90;
            $(":checkbox:checked")
              .parent()
              .parent()
              .css("text-decoration", "line-through");
            $(":checkbox:not(:checked)")
              .parent()
              .parent()
              .css("text-decoration", "none");
            checkedlist += rowIndex;
            if (counter >= 5) {
              alert("Congratulations!!");
              resolve();
            }
          });
          promise.then(()=>{
            alert("Congrats. 5 Tasks have been Successfully Completed");
          });
        });
      });
    }
  };
  xhttp.open("GET", "https://jsonplaceholder.typicode.com/todos", true);
  xhttp.send();
}
