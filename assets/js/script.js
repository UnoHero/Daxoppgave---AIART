document.addEventListener("DOMContentLoaded", function() {
  const imageFilenames = [
    "../assets/media/images/DALL·E%202024-02-25%2013.55.27%20-%20Imagine%20an%20aquarelle%20(watercolor)%20painting%20that%20depicts%20a%20serene%20forest%20scene%20in%20Germany.%20The%20artwork%20captures%20the%20lush%20greenery%20of%20the%20German%20country.webp",
    "../assets/media/images/DALL·E%202024-02-25%2013.55.34%20-%20Visualize%20an%20oil%20painting%20that%20captures%20the%20classic%20still%20life%20subject%20of%20a%20bowl%20of%20fruit.%20The%20composition%20features%20a%20richly%20detailed%20bowl%20overflowing.webp",
    "../assets/media/images/DALL·E%202024-02-25%2013.55.41%20-%20Imagine%20a%20futuristic%20garden%20where%20the%20flowers%20are%20not%20organic,%20but%20robotic.%20Each%20flower%20is%20meticulously%20designed%20with%20metallic%20petals%20that%20gleam%20in%20th.webp",
    "../assets/media/images/DALL·E%202024-02-25%2013.55.45%20-%20Reimagine%20the%20scene%20with%20a%20specific%20color%20scheme_%20the%20robot%20dragon%20now%20has%20a%20striking%20red%20tint%20to%20its%20metallic%20body,%20symbolizing%20its%20fiery%20nature%20and%20.webp",
    "../assets/media/images/DALL·E%202024-02-25%2013.55.51%20-%20Envision%20a%20futuristic%20scene%20where%20a%20robot%20Viking,%20designed%20with%20intricate%20metallic%20armor%20that%20reflects%20the%20traditional%20Viking%20appearance,%20rides%20atop%20a.webp",
    "../assets/media/images/DALL·E%202024-02-25%2013.55.56%20-%20Revise%20the%20scene%20once%20more,%20placing%20the%20Viking%20warrior%20with%20green%20eyes%20and%20red%20hair,%20and%20his%20baby%20dragon%20companion,%20at%20the%20forefront%20of%20a%20Viking%20ship,.webp",
    "../assets/media/images/DALL·E%202024-02-25%2013.56.00%20-%20Imagine%20a%20revised%20scene%20from%20the%20Viking%20Age,%20where%20the%20same%20formidable%20Viking%20warrior,%20characterized%20by%20striking%20green%20eyes%20and%20fiery%20red%20hair,%20now%20ha.webp",
    "../assets/media/images/DALL·E%202024-02-25%2013.56.05%20-%20Imagine%20a%20scene%20set%20in%20the%20Viking%20Age,%20where%20a%20formidable%20Viking%20warrior%20stands%20proudly%20in%20front%20of%20a%20traditional%20longhouse.%20This%20Viking,%20characterize.webp",
    "../assets/media/images/DALL·E%202024-02-25%2013.56.09%20-%20Envision%20a%20captivating%20scene%20where%20a%20Hydra%20from%20Greek%20mythology,%20a%20formidable%20multi-headed%20serpent,%20coils%20around%20a%20modern%20computer%20screen.%20The%20Hydra,%20.webp",
    "../assets/media/images/DALL·E%202024-02-25%2013.56.13%20-%20Imagine%20a%20powerful%20scene%20where%20a%20majestic%20Chinese%20dragon,%20with%20scales%20glistening%20in%20various%20shades%20of%20red,%20curls%20around%20a%20modern%20computer%20screen.%20Red,.webp",
    "../assets/media/images/DALL·E%202024-02-25%2013.56.16%20-%20Envision%20a%20scene%20where%20a%20significantly%20larger,%20majestic%20raven%20perches%20atop%20an%20advanced%20LED%20keyboard,%20its%20white%20lights%20softly%20illuminating%20the%20scene.%20T.webp",
    "../assets/media/images/DALL·E%202024-02-25%2013.56.20%20-%20Imagine%20a%20scene%20where%20a%20mysterious%20raven%20perches%20gracefully%20on%20a%20modern%20LED%20keyboard,%20illuminated%20by%20soft%20white%20lights.%20The%20keyboard,%20with%20its%20sleek%20d.webp",
    "../assets/media/images/DALL·E%202024-02-25%2013.56.23%20-%20Visualize%20a%20high-performance%20computer%20with%20a%20transparent%20case,%20as%20seen%20through%20the%20artistic%20lens%20of%2012th%20century%20Japan.%20This%20concept%20marries%20the%20sophi.webp",
    "../assets/media/images/DALL·E%202024-02-25%2013.56.27%20-%20Envision%20a%20high-performance%20computer%20with%20a%20transparent%20case,%20creatively%20reimagined%20in%20the%20style%20of%20Maya%20art.%20This%20unique%20portrayal%20combines%20the%20advan.webp",
    "../assets/media/images/DALL·E%202024-02-25%2013.56.30%20-%20Visualize%20a%20high-performance%20computer%20with%20a%20transparent%20case,%20reimagined%20in%20the%20style%20of%20Archaic%20Egyptian%20art.%20This%20computer%20merges%20the%20ancient%20with%20.webp",
    "../assets/media/images/DALL·E%202024-02-25%2013.56.35%20-%20Imagine%20a%20high-performance%20computer%20with%20a%20transparent%20case,%20transformed%20through%20the%20lens%20of%20Art%20Nouveau%20style.%20This%20artistic%20approach%20brings%20out%20the%20.webp",
    "../assets/media/images/DALL·E%202024-02-25%2013.56.39%20-%20Visualize%20a%20modern,%20high-performance%20computer%20with%20a%20sleek,%20transparent%20case%20that%20allows%20a%20clear%20view%20of%20its%20internal%20components.%20Inside,%20blue%20and%20red.webp",
    "../assets/media/images/DALL·E 2024-02-25 13.56.42 - Visualize a modern, high-performance computer with a sleek, transparent case that allows a clear view of its internal components. Inside, blue and red.webp",
    "../assets/media/images/DALL·E 2024-02-25 13.58.07 - Envision a powerful and mystical scene where the Four Horsemen of the Apocalypse are majestically riding robotic dragons. Each horseman, cloaked in an.webp",
    "../assets/media/images/DALL·E 2024-02-25 13.58.55 - Imagine a whimsical and slightly eerie scene featuring four happy clowns with vampire teeth. These clowns are dressed in traditional, colorful clown o.webp",
    "../assets/media/images/DALL·E 2024-02-25 17.12.53 - Picture a triumphant and symbolic scene with three clowns standing on top of a hill, holding an American flag high above their heads. These clowns are.webp",
    "../assets/media/images/DALL·E 2024-02-25 17.15.57 - Envision a heartwarming and adorable scene where a puppy, a kitten, and a piglet are sitting together, sharing a banana. The puppy is fluffy, with a c.webp",
    "../assets/media/images/DALL·E 2024-02-25 17.16.48 - Imagine a charming and delightful scene where a Staffordshire Bull Terrier puppy, a kitten, and a piglet are sitting together, sharing a banana. The S.webp",
    "../assets/media/images/DALL·E 2024-02-25 17.19.03 - Envision a humorous and offbeat scene where two men and two women are deeply involved in a game of poker, each wearing a dog mask and sitting in their.webp",
    "../assets/media/images/DALL·E 2024-02-25 17.21.38 - Imagine an engaging scene of four people, two men and two women, sitting around a poker table, deeply focused on their game. Each player represents a .webp",
    "../assets/media/images/DALL·E 2024-02-25 17.21.42 - Imagine an engaging scene of four people, two men and two women, sitting around a poker table, deeply focused on their game. Each player represents a .webp",
  ];
  let currentImageIndex = 1;
  const galleryImg = document.getElementById("slideshowImg");

  function changeImage() {
    if ( imageFilenames.length === 0) {

    galleryImg.src = ""; // Clear the image source
      galleryImg.alt = "No pictures found"; // Set alt text for accessibility
      galleryImg.style.display = "none"; // Hide the image element
      alert("\O/ AI MAKES NO ART, MAKE SOME INSTEAD, OR LEAVE THAT TO SUCKERBURGZ <3");
    } else {
      galleryImg.src = imageFilenames[currentImageIndex];
      currentImageIndex = (currentImageIndex + 1) % imageFilenames.length;
    }
  }

  setInterval(changeImage, 2000); // Change image every 3 seconds (adjust as needed)
});
