import Enum from "enum";

export const primaryRoute = new Enum({
  MAIN: ["/", "Main"],
  INFO: ["/info", "Information"],
  POST: ["/posts", "Posts"],
  CONTACT: ["/contact", "Contact"],
  ASK: ["/ask", "Ask"],
});
