<?php
//mysql connection
require_once 'includes/db.php';
$query = "SELECT * FROM `students`";
$results = mysqli_query($conn, $query);
$records = mysqli_num_rows($results);
$msg = "";
if (!empty($_GET['msg'])) {
    $msg = $_GET['msg'];
    $alert_msg = ($msg == "add") ? "New Record has been added successfully!" : (($msg == "del") ? "Record has been deleted successful" : "Record has been updated successfull");
} else {
    $alert_msg = "";
}
?>
<!DOCTYPE html>
<html lang="en">
<?php
include 'partial/head.php';
?>
<body>
   <?php
   include 'partial/nav.php';
   ?>
   <div class="container">
   <?php if(!empty($alert_msg)) {?>
        <div class="alert alert-success"><?php echo $alert_msg; ?></div>
   <?php }?>
   <div class="info"></div>
   <table class="table">
   <thead>
   <tr>
   <th scope="col">ID</th>
   <th scope="col">Name</th>
   <th scope="col">Gender</th>
   <th scope="col">Email</th>
   <th scope="col">Course</th>
   <th scope="col">Action</th>
   </tr>
   </thead>
   <tbody>
   <?php 
   if (!empty($records)) {
       while ($row = mysqli_fetch_assoc($results)) {
       ?>
       <tr>
       <th scope="row"><?php echo $row['id']; ?></th>
       <td><?php echo $row['first_name'] . ' ' .$row['last_name']; ?></td>
       <td><?php echo $row['gender']; ?></td>
       <td><?php echo $row['email']; ?></td>
       <td><?php echo $row['course']; ?></td>
       <td>
       <a href="add.php?id=<?php echo $row['id']; ?>" class="btn btn-primary">Edit</a>
       <a href="delete.php?id=<?php echo $row['id']; ?>" class="btn btn-danger" onclick="javascript:return confirm('Do You really want to delete this record?');">Delete</a>
       </td>
       </tr>
       <?php
   }
}
   ?>
   </tbody>
   </table>
   </div>
</body>
</html>