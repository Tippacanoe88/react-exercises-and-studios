export default function BookList() {
   let pageTitle = "shrug";
   let book1 = "https://th.bing.com/th/id/OIP.X5PwCexBn2SmLZkO_m5RoAHaLP?w=138&h=211&c=7&r=0&o=5&dpr=1.3&pid=1.7";
   let book2 = "https://th.bing.com/th/id/OIP.JBdXxeATPXWJPt7JlG9ziQHaLX?pid=ImgDet&rs=1";
   let book3 = "https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781398503724/the-storyteller-9781398503724_hr.jpg";

   return (
      <div>
         <h3>{pageTitle}</h3>
         <img src={book1} alt="Issunboshi" />
         <img src={book2} alt="Watchmen" />
         <img src={book3} alt="The Storyteller" />
      </div>      
   );
}