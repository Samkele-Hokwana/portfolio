import pro1 from "../assets/laundry.jpg"
import pro2 from "../assets/chair.jpg"
import pro3 from "../assets/react2.png"
import portF1 from "../assets/samDBSportfolio.pdf"

const ProjectCardData = [
    {
        imgsrc: pro1,
        title: "WashIt",
        text: "University/College students often lead busy lives, juggling classes, extracurricular activities, and part time jobs. As a result, they may struggle to find time to do their laundry, which can be both time consuming and inconvenient. This can lead to students wearing dirty clothes or spending money on expensive laundry services.",
        view: "https://www.youtube.com/watch?v=0h2b4ftbZcU&list=PPSV",
        source: "https://www.youtube.com/watch?v=0h2b4ftbZcU&list=PPSV"
    },
    {
        imgsrc: pro3,
        title: "Employee Management System",
        text: "This is a simple Employee Management System where can view, add, update, delete employees.",
        view: "https://www.youtube.com/watch?v=0h2b4ftbZcU&list=PPSV",
        source: "https://www.youtube.com/watch?v=0h2b4ftbZcU&list=PPSV"
    },
    {
        imgsrc: pro2,
        title: "Database System's Portfolio",
        text: "This portfolio is from one of my final year modules(Database Systems) serves as a proof of my relational database skills, and it shows my ups and downs of my learning journey.",
        view: openPDF(portF1),
        source: "https://www.youtube.com/watch?v=0h2b4ftbZcU&list=PPSV"
    }

];
function openPDF(pdfFile){
    window.open(pdfFile,"_blank");
}
export default ProjectCardData;