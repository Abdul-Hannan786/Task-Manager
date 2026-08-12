import multer from "multer";

const storage = multer.memoryStorage({});

const fileFilter = (req, file, cb) => {
  const allowedTypes = ["image/jpeg", "image/png", "image/jpg", "image/webp"];
  if (allowedTypes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(new Error("Only .jpeg, .jpg, .png formats are allowed"), false);
  }
};

const upload = multer({ storage, fileFilter });

export default upload;
