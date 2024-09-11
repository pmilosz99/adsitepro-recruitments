import { ToggleSection } from "./toggleSection";

export function Seo() {
  const content = [
    {
      title: 'ID NOSTRUD ENIM ESSE CONSECTETUR IN EU MOLLIT FUGIAT AUTE. VELIT NULLA COMMODO.',
      text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel purus vel augue fringilla scelerisque. 
             Mauris tempor pretium tellus vitae dapibus. Sed lacinia id nisi nec luctus. Sed eu blandit massa. 
             Aliquam et mauris felis. Etiam ut mauris ac orci vulputate consectetur ullamcorper vitae odio. Cras vel pellentesque nibh. 
             Praesent nec mi quis tellus porttitor fermentum. Pellentesque ultrices libero in tempor eleifend. In eleifend massa et fringilla tristique.`
    },
    {
      title: 'ID NOSTRUD ENIM ESSE CONSECTETUR IN EU MOLLIT FUGIAT AUTE. VELIT NULLA COMMODO.',
      text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel purus vel augue fringilla scelerisque. 
             Mauris tempor pretium tellus vitae dapibus. Sed lacinia id nisi nec luctus. Sed eu blandit massa. 
             Aliquam et mauris felis. Etiam ut mauris ac orci vulputate consectetur ullamcorper vitae odio. Cras vel pellentesque nibh. 
             Praesent nec mi quis tellus porttitor fermentum. Pellentesque ultrices libero in tempor eleifend. In eleifend massa et fringilla tristique.`
    },
  ];

    return (
      <footer className="bg-footer text-white py-6 mt-10">
        <div className="flex flex-row justify-between items-center content-center xl:mx-32 sm: mx-2 space-x-6 py-20">
          {content.map((section, index) => (
            <ToggleSection key={index} title={section.title} text={section.text} />
          ))}
        </div>
      </footer>
    );
}