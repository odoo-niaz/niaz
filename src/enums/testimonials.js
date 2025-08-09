export const TESTIMONIALS = [{
    id: 1, name: "How to Inject JavaScript Directly into an Odoo XML Template", location: "UK", text: `In Odoo development, XML templates are the backbone for rendering views, dialogs, and UI components.  
While QWeb templates are primarily designed for HTML structure and Odoo widgets, there are times when you need to inject custom JavaScript directly inside an XML template — for example, to manipulate DOM elements or tweak UI behavior.  
In this article, we’ll explore how to embed JavaScript into an Odoo XML template and run it when the page is loaded.  

However, for small UI tweaks or one-off scripts, inline JavaScript can be a quick and effective solution.  
While the best practice is to write JavaScript in static/src/js modules, inline scripts inside XML templates can be useful for small, targeted changes.`,

    extraCode: `Example 1: Adjusting Modal Size 
<odoo>
  <template id="custom_modal_script" inherit_id="web.modal" name="Custom Modal Size">
    <xpath expr="//body" position="inside">
      <script>
        $(document).ready(function () {
          $('.modal-dialog').css({ 'max-width': '550px' });
          $('.modal-content').css({ 'max-height': '100%' });
        });
      </script>
    </xpath>
  </template>
</odoo>

Example 2 – Highlight Rows in a Tree/List View  
Sometimes you want to make certain rows stand out based on values.
<odoo>
  <template id="highlight_tree_rows" inherit_id="web.webclient_bootstrap" name="Highlight Rows">
    <xpath expr="//body" position="inside">
      <script>
        $(document).ready(function () {
          $("tr:contains('High Priority')").css("background-color", "#ffe5e5");
        });
      </script>
    </xpath>
  </template>
</odoo>

Example 3 – Auto-Fill a Form Field  
If you want to set a default value in a form when it loads:
<odoo>
  <template id="autofill_form_field" inherit_id="web.webclient_bootstrap" name="Auto Fill Field">
    <xpath expr="//body" position="inside">
      <script>
        $(document).ready(function () {
          $("input[name='x_custom_field']").val("Pre-filled Value");
        });
      </script>
    </xpath>
  </template>
</odoo>

Example 4 – Show an Alert on Page Load  
A simple way to notify users of something important:
<odoo>
  <template id="alert_on_load" inherit_id="web.webclient_bootstrap" name="Alert Message">
    <xpath expr="//body" position="inside">
      <script>
        $(document).ready(function () {
          alert("Please review the latest policy updates before proceeding.");
        });
      </script>
    </xpath>
  </template>
</odoo>

Example 5 – Toggle Visibility of an Element  
Hide/show an element when a button is clicked:
<odoo>
  <template id="toggle_visibility_script" inherit_id="web.webclient_bootstrap" name="Toggle Visibility">
    <xpath expr="//body" position="inside">
      <script>
        $(document).ready(function () {
          $("#my-toggle-btn").click(function () {
            $("#my-target-div").toggle();
          });
        });
      </script>
    </xpath>
  </template>
</odoo>`, text3: `
Best Practices:
• Keep inline scripts small — move big logic to a .js file.
• Test on mobile — DOM tweaks might break responsive layouts.
• Use unique selectors — to avoid changing unintended elements.
• Avoid loading twice — wrap code in $(document).ready() to prevent duplicate execution.
`,

    isImage: false, isVideo: false, article: true,
},

{
        id: 2,
        name: "Ramla Hassan",
        location: "Australia",
        text: "I've had the chance to work closely with Umer during the development of portals for Safr Care... One of the smartest developers I've met! I highly recommend him.",
        image: "/images/screenshot/ramla.png",
        isImage: true,
        isVideo: false,
        video: "",
        article: false
    }, {
        id: 3,
        name: "Tripsholi",
        location: "Spain",
        text: "Umer is skilled, reliable, and always focused on getting the job done right. His attention to detail and code quality are impressive. Highly recommended.",
        image: "/images/screenshot/tripsholi.png",
        isImage: true,
        isVideo: false,
        video: "",
        article: false
    }, {
        name: "Ahmed Burkhi",
        location: "Germany",
        text: "If you are looking for a website job done. Umer A. is your person to work with. Great knowledge with good skill in design and a professional in coding. Highly recommended.",
        image: "/images/screenshot/ahmed.png",
        isImage: true,
        isVideo: false,
        video: "",
        article: false
    }, {
        name: "Jawad Sadiq",
        location: "Bahrain",
        text: "Umer's expertise and work ethic were outstanding. It would be a privilege to work with him again, and I would highly recommend them for any Vue.js development projects.",
        image: "/images/screenshot/jawad.png",
        isImage: true,
        isVideo: false,
        video: "",
        article: false
    }, {
        name: "Mohammad Ashoor",
        location: "Dubai, UAE",
        text: "Umer performed an excellent job developing the required website. The communication was excellent, and the talents were exceptional. We will collaborate with Umer on any future ventures.",
        image: "/images/screenshot/ashoor.png",
        isImage: true,
        isVideo: false,
        video: "",
        article: false
    }, {
        name: "Itzone Graz",
        location: "Austria",
        text: "Umer understood our needs quickly and delivered results ahead of time. We truly appreciated his clarity and efficiency, would absolutely work with him again.",
        image: "/images/screenshot/zone.png",
        isImage: true,
        isVideo: true,
        video: "/images/arthur-testimonial.mp4"

    }, {
        name: "Itzone Graz",
        location: "Austria",
        text: "Umer understood our needs quickly and delivered results ahead of time. We truly appreciated his clarity and efficiency, would absolutely work with him again.",
        image: "/images/screenshot/zone.png",
        isImage: true,
        isVideo: true,
        video: "/images/arthur-testimonial.mp4"

    },

];
