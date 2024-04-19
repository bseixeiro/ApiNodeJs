import jwt from "jsonwebtoken";

export default function isAuth(req, res, next) {
  // recuperer le header authorization
  const header = req.header("Authorization");

  if (!header){
    return res.status(401).json({ message: "Unauthorized" });
  }
  // "Bearer token"
  const array = header.split(" ");
  if (array.length !== 2) {
    return res.status(401).json({ message: "Unauthorized" });
  }
  const token = array[1];
  // si le token n'est pas existant, on renvoie une erreur 401
  if (!token) {
    return res.status(401).json({ message: "Unauthorized" });
  }
  let decodedToken;
  // faire des try catch pour gerer les erreurs
  decodedToken = jwt.verify(token, process.env.JWT_SECRET);

  // verifier si le token est null
  if (!decodedToken) {
    return res.status(401).json({ message: "Unauthorized" });
  }
  
  // vous allez ensuite modifier request pour qu'il contiennent des infos relatives
  // au user authentifié
  req.user = decodedToken;
  next();
}
