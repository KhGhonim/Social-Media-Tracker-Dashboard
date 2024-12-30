import multer from "multer";

const storage = multer.memoryStorage();
const upload = multer({
  storage,
});
// The name of the Image field in the form
export const uploadImage = upload.single("ImageForBackEnd");
