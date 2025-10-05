const app = document.getElementById('app');

const views = {
  home: `
    <section>
      <h2>Welcome to City General Hospital</h2>
      <p>Your health is our priority. We provide comprehensive medical services with compassionate care.</p>
      <img src="assets/hospital-building.jpg" alt="Hospital Building" style="max-width:100%; height:auto; border-radius:8px;" />
    </section>
  `,
  about: `
    <section>
      <h2>About Us</h2>
      <p>City General Hospital has been serving the community since 1950. Our mission is to provide quality healthcare with a patient-centered approach.</p>
      <p>We are equipped with state-of-the-art facilities and a dedicated team of healthcare professionals.</p>
    </section>
  `,
  services: `
    <section>
      <h2>Our Services</h2>
      <ul>
        <li><button data-view="emergencyCare" class="link-button">Emergency Care</button></li>
        <li><button data-view="outpatientServices" class="link-button">Outpatient Services</button></li>
        <li><button data-view="inpatientCare" class="link-button">Inpatient Care</button></li>
        <li><button data-view="surgicalServices" class="link-button">Surgical Services</button></li>
        <li><button data-view="maternityCare" class="link-button">Maternity and Neonatal Care</button></li>
        <li><button data-view="diagnosticImaging" class="link-button">Diagnostic Imaging</button></li>
        <li><button data-view="laboratoryServices" class="link-button">Laboratory Services</button></li>
        <li><button data-view="pharmacy" class="link-button">Pharmacy</button></li>
      </ul>
    </section>
  `,
  doctors: `
    <section>
      <h2>Our Doctors</h2>
      <ul>
        <li>Dr. Alice Smith - Cardiologist</li>
        <li>Dr. Bob Johnson - Neurologist</li>
        <li>Dr. Carol Lee - Pediatrician</li>
        <li>Dr. David Kim - General Surgeon</li>
        <li>Dr. Eva Martinez - Obstetrician</li>
      </ul>
    </section>
  `,
  contact: `
    <section>
      <h2>Contact Us</h2>
      <p><strong>Address:</strong> 123 Main St, Cityville</p>
      <p><strong>Phone:</strong> <a href="tel:+1234567890">(123) 456-7890</a></p>
      <p><strong>Email:</strong> <a href="mailto:info@citygeneralhospital.com">info@citygeneralhospital.com</a></p>
      <form id="contactForm" aria-label="Contact form">
        <label for="name">Your Name</label>
        <input type="text" id="name" name="name" placeholder="Your Name" required aria-required="true" />
        <label for="email">Your Email</label>
        <input type="email" id="email" name="email" placeholder="Your Email" required aria-required="true" />
        <label for="message">Your Message</label>
        <textarea id="message" name="message" placeholder="Your Message" rows="4" required aria-required="true"></textarea>
        <button type="submit" aria-label="Send message">Send Message</button>
      </form>
      <div id="contactResponse" role="alert" aria-live="polite"></div>
    </section>
  `,
  emergencyCare: `
    <section>
      <h2>Emergency Care</h2>
      <p>Our Emergency Department is open 24/7 to provide immediate care for critical and urgent health issues.</p>
    </section>
  `,
  outpatientServices: `
    <section>
      <h2>Outpatient Services</h2>
      <p>We offer a wide range of outpatient services including consultations, diagnostics, and minor procedures.</p>
    </section>
  `,
  inpatientCare: `
    <section>
      <h2>Inpatient Care</h2>
      <p>Our inpatient facilities provide comprehensive care with comfortable rooms and attentive nursing staff.</p>
    </section>
  `,
  surgicalServices: `
    <section>
      <h2>Surgical Services</h2>
      <p>We perform a variety of surgical procedures using advanced techniques and equipment.</p>
    </section>
  `,
  maternityCare: `
    <section>
      <h2>Maternity and Neonatal Care</h2>
      <p>Our maternity ward offers prenatal, delivery, and postnatal care with specialized neonatal support.</p>
    </section>
  `,
  diagnosticImaging: `
    <section>
      <h2>Diagnostic Imaging</h2>
      <p>We provide state-of-the-art imaging services including X-rays, MRI, CT scans, and ultrasounds.</p>
    </section>
  `,
  laboratoryServices: `
    <section>
      <h2>Laboratory Services</h2>
      <p>Our accredited laboratory offers a full range of diagnostic tests with quick turnaround times.</p>
    </section>
  `,
  pharmacy: `
    <section>
      <h2>Pharmacy</h2>
      <p>Our onsite pharmacy provides prescription medications and health products with expert advice.</p>
    </section>
  `
};

document.querySelectorAll("nav button").forEach(btn => {
  btn.addEventListener("click", () => loadView(btn.dataset.view));
});

function loadView(view) {
  app.innerHTML = views[view];
  if (view === "contact") {
    initContactForm();
  }
}

function initContactForm() {
  const form = document.getElementById('contactForm');
  const responseDiv = document.getElementById('contactResponse');
  form.onsubmit = e => {
    e.preventDefault();
    responseDiv.textContent = "Thank you for contacting us. We will get back to you shortly.";
    form.reset();
  };
}

// Load default view
loadView("home");
