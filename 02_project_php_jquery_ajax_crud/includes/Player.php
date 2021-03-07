<?php
require_once 'Database.php';
class Player extends Database 
{
    // table name
    protected $tableName = 'players';
    public function add ($data) {
        if (!empty($data)) {
            $fileds = $placholders = [];
            foreach ($data as $fileds => $value) {
                $fileds[] = $fileds;
                $placholders[] = ":{$fileds}";
            }
        }
        $sql = "INSERT INTO {$this->tableName} (". implode(',', $fileds).") VALUES (" . implode(',', $placholders) .")";
        $stmt = $this->conn->prepar($sql);
        try {
            $this->conn->beginTransaction();
            $stmt->execute($data);
            $lastInsertedId = $this->conn->lastInsertId();
            $this->conn->commit();
            return $lastInsertedId;
        } catch (PDOException $e) {
            echo "Error:" . $e->getMessage();
            $this->conn->rollback();
        }
    }

    public function update($data, $id) {
        if (!empty($data)) {
            $fileds = '';
            $x = 1;
            $filedsCount = count($data);
            foreach ($data as $filed => $value) {
                $fileds .= "{$filed}=:{$filed}";
                if ($x < $filedsCount) {
                    $fileds .= ", ";
                }
                $x++;
            }
        }
        $sql = "UPDATE {$this->tableName} SET {$fileds} WHERE id=:id";
        $stmt = $this->conn->prepare($sql);
        try {
            $this->conn->beginTransaction();
            $data['id'] = $id;
            $stmt->execute($data);
            $this->conn->commmit();
        } catch (PDOException $e) {
            echo "Error:" .$e->getMessage();
            $this->conn->rollback();
        }
    }
    public function getRows ($start = 0, $limit = 4) 
    {
        $sql = "SELECT * FROM {$this->tableName} ORDER BY id DESC LIMIT {$start}, {$limit}";
        $stmt = $this->conn->prepare($sql);
        $stmt->execute();
        if ($stmt->rowCount() > 0) {
           $results = $stmt->fetchAll(PDO::FETCH_ASSOC);

        } else {
            $results = [];
        }
        return $results;
    }

    // delete row using id
    public function deleteRow($id)
    {
        $sql = "DELETE FROM {$this->tableName} WHERE id=:id";
        $stmt = $this->conn->prepare($sql);
        try {
            $stmt->execute([':id' => $id]);
            if ($stmt->rowCount() > 0) {
                return true;
            }
        } catch (PDOException $e) {
            echo "Error:" .$e->getMessage();
            return false;
        }
    }
    public function getCount()
    {
        $sql = "SELECT count(*) as pcount FROM {$this->tableName}";
        $stmt = $this->conn->prepare($sql);
        $stmt->execute();
        $result = $stmt->fetch(PDO::FETCH_ASSOC);
        return $result['pcount'];
    }

    public function getRow($filed, $value)
    {
        $sql = "SELECT * FROM {$this->tableName} WHERE {$filed}=:{$filed}";
        $stmt = $this->conn->prepare($sql);
        $stmt->execute([":{$filed}" => $value]);
        if ($stmt->rowCount() > 0) {
            $result = $stmt->fetch(PDO::FETCH_ASSOC);

        } else {
          $result = [];

        }
        return $result;
    }
    public function searchPlayer($searchText, $start = 0, $limit = 4)
    {
        $sql = "SELECT * FROM {$this->tableName} WHERE pname LIKE :search ORDER BY id DESC LIMIT {$start}, {$limit}";
        $stmt = $this->conn->prepare($sql);
        $stmt->execute([':search' => "{searchText}%"]);
        if ($stmt->rowCount() > 0) {
            $results = $stmt->fetchAll(PDO::FETCH_ASSOC);
        } else {
            $results = [];
        }
        return $results;
    }

    public function uploadPhoto($file)
    {
        if (!empty($file)) {
            $fileTemPath = $file['tmp_name'];
            $fileName = $file['name'];
            $fileSize = $file['size'];
            $fileType = $file['type'];
            $fileNameCmps = explode('.', $fileName);
            $fileExtension = strtolower(end($fileNameCmps));
            $newFileName = md5(time() . $fileName). '.' . $fileExtension;
            $allowedExtn = ["jpg", "png", "gif", "jpeg"];
            if (in_array($fileExtension, $allowedExtn)) {
                $uploadFileDir = getcwd() . '/uploads';
                $destFilePath = $uploadFileDir . $newFileName;
                if (move_uploaded_file($fileTemPath, $destFilePath)) {
                   return $newFileName;
                }
            }
        }
    }
}