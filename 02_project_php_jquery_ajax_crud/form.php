<!-- add / edit form modal -->
<div class="modal fade" id="userModal" tabindex="-1" role="dialog" aria-labelledby="userModalLabel" aria-hidden="true">
<div class="modal-dialog">
<div class="modal-content">
<div class="modal-header">

<h5 class="modal-title" id="exampleModalLabel">Add/Edit User <i class="fa fa-user-circle-o"></i></h5>
<button class="close" type="button" data-dismiss="modal" aria-label="Close">
<span aria-hidden="true">&times;</span>
</button>
</div>
<form action="" method="POST" enctype="multipart/form-data" id="addform">
    <div class="modal-body">
        <div class="form-group">
        <label for="recipient-name" class="col-form-label">Name</label>
        <div class="input-group mb-3">
        <div class="input-group-prepend">
        <span class="input-group-text" id="basic-addon1"><i class="fa fa-user-circle-o" aria-hidden="true"></i></span>
        </div>
        <input type="text" class="form-control" id="username" name="username" requireed="required">
        </div>
        </div>
        <div class="form-group">
        <label for="recipient-name" class="col-form-label">Email</label>
        <div class="input-group mb-3">
        <div class="input-group-prepend">
        <span class="input-group-text" id="basic-addon1"><i class="fa fa-envelope-o" aria-hidden="true"></i></span>
        </div>
        <input type="text" class="form-control" id="email" name="email" requireed="required">
        </div>
        </div>
        <div class="form-group">
        <label for="recipient-name" class="col-form-label">Phone</label>
        <div class="input-group mb-3">
        <div class="input-group-prepend">
        <span class="input-group-text" id="basic-addon1"><i class="fa fa-phone" aria-hidden="true"></i></span>
        </div>
        <input type="text" class="form-control" id="username" name="phone" requireed="required" maxlength="11">
        </div>
        </div>
        <div class="form-group">
        <label for="recipient-name" class="col-form-label">User Photo</label>
        <div class="input-group mb-3">
        <div class="input-group-prepend">
        <span class="input-group-text" id="basic-addon1"><i class="fa fa-picture-o" aria-hidden="true"></i></span>
        </div>
        <div class="custom-file">
        <input type="file" class="custom-file-input" name="photo" id="userphoto">
        <label class="custom-file-label" for="userphoto">Choose Photo</label>
        </div>
        </div>
        </div>
    </div>
    <div class="modal-footer">
        <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
        <button type="submit" class="btn btn-success" id="addButton">Submit</button>
        <input type="hidden" name="action" value="adduser">
        <input type="hidden" name="userid" id="userid" value="">
    </div>
</form>
</div>
</div>
</div>
<!-- add / edit form modal end -->