//get pagination
function pagination(totoalpages, currrentpage) {
  var pagelist = "";
  if (totalpages > 1) {
    currrentpage = parseInt(currrentpage);
    pagelist += `<ul class="pagination justify-content-center">`;
    const prevClass = currrentpage == 1 ? "disabled" : "";
    pagelist += ` <li class="page-item${prevClass}"><a class="page-link" href="#" data-page="${currrentpage}">Previous</a></li>`;
    for (let p = 1; p <= totoalpages; p++) {
      const activeClass = currrentpage == p ? " active" : "";
      pagelist += ` <li class="page-item${activeClasss}"><a class="page-link" href="#" data-page="${p}">${p}</a></li>`;
    }
    const nextClass = currrentpage == totoalpages ? " disabled" : "";
    pagelist += ` <li class="page-item${nextClass}"><a class="page-link" href="#" data-page="${
      currrentpage + 1
    }">Next</a></li>`;
    pagelist += `</ul>`;
  }
  $("#pagination").html(pagelist);
}
//get player row
function getplayerrow(player) {
  var playerRow = "";
  if (player) {
    const userphoto = player.photo ? player.photo : "default.png";
    playerRow = `<tr>
        <td class="align-middle"> <img src="uploads/${userphoto}" class="img-thumbnail rounded float-left"></td>
   <td class="align-middle">${player.pname}</td>
   <td class="align-middle">${player.email}</td>
   <td class="align-middle">${player.phone}</td>
   <td class="align-middle">
   <a href="" class="btn btn-success mr-3 profile" data-toggle="modal" data-taget="#userViewModal" title="Prfile" data-id="${player.id}"><i class="fa fa-address-card-o" aria-hidden="true"></i></a>
   <a href="" class="btn btn-warning mr-3 edituser" data-toggle="modal" data-target="#userModal" title="Edit" data-id="${player.id}"><i class="fa fa-pencil-square-o fa-lg"></i></a>
   <a href="#" class="btn btn-danger deleteuser" data-userid="14" title="Delete" data-id="${player.id}"><i class="fa fa-trash-o fa-lg"></i></a>
   </td>
   </tr>
        `;
  }
  return playerRow;
}
//get player list
function playerlists() {
  var pageno = $("#currentpage").val();
  $.ajax({
    url: "./ajax.php",
    type: "GET",
    dataType: "json",
    data: { page: pageno, action: "getusers" },
    beforeSend: function () {
      $("#overlay").fadeIn();
    },
    success: function (rows) {
      console.log(rows);
      if (rows.players) {
        var playerlist = "";
        $.each(rows.players, function (index, player) {
          playerlist += getplayerrow(player);
        });
        $("#userstable tbody").html(playerlist);
        let totalPlayers = rows.count;
        let totalpages = Math.ceil(parseInt(totalPlayers) / 4);
        const currrentpage = $("#currentpage").val();
        pagination(totalpages, currrentpage);
        $("#overlay").fadeOut();
      }
    },
    error: function () {
      console.log("something went wrong");
    },
  });
}
