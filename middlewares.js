import multer from "multer";
import routes from "./routes";

const multerVideo = multer({ dest: "uploads/videos/" }); // make sure not to put /uploads/videos, it will think it's in root folder of computer


export const localsMiddleware = (req, res, next) => {
    res.locals.siteName = "weVideo";
    res.locals.routes = routes;
    res.locals.user = {
        isAuthenticated: true,
        id: 1
    };
    next();
};

export const uploadVideo = multerVideo.single("videoFile"); //-> same as HTML name in upload.pug
