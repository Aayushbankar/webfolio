// Full blog post content with extended creative formatting
const blogPosts = {
    post1: {
      title: "Unraveling the Code: The Kafka AI Revolution",
      date: "August 15, 2025",
      content: `
        <h2>Introduction</h2>
        <p>
          At the Hack the Spring Hackathon, I embarked on a journey to transform raw, real-time Kafka data into digital art. The project pushed the boundaries of conventional data processing, inspiring me to explore the poetic side of technology.
        </p>
        <h2>Project Overview</h2>
        <p>
          This endeavor combined several advanced techniques:
        </p>
        <ul>
          <li><strong>Data Aggregation:</strong> Harnessing streams of live data.</li>
          <li><strong>Model Fine-Tuning:</strong> Adapting a GPT-2 model within a Kafka pipeline.</li>
          <li><strong>Creative Integration:</strong> Using innovative algorithms to transform data into narrative form.</li>
        </ul>
        <h2>Challenges Faced</h2>
        <p>
          One of the biggest challenges was controlling the sheer volume of data without losing the creative spark. Adaptive learning rates and dynamic feedback loops were key to overcoming these hurdles.
        </p>
        <h2>Results and Reflections</h2>
        <p>
          The project culminated in an AI system that not only processed data but also generated thought-provoking, poetic text—blurring the lines between machine precision and artistic expression. This experiment has paved the way for a new form of digital storytelling.
        </p>
        <h2>Conclusion</h2>
        <p>
          The Kafka AI Revolution is a testament to the endless possibilities when technology and creativity intersect. It challenges us to rethink how data can be experienced as art.
        </p>
      `
    },
    post2: {
      title: "Inside an OTP Bomber: Anatomy of a Digital Exploit",
      date: "July 20, 2025",
      content: `
        <h2>Overview</h2>
        <p>
          OTP bombers represent a controversial yet illuminating phenomenon in digital security. This article delves into their inner workings and highlights the lessons they offer for robust API protection.
        </p>
        <h2>Mechanics of the Exploit</h2>
        <p>
          An OTP bomber typically operates by:
        </p>
        <ol>
          <li><strong>Exploiting Weaknesses:</strong> Identifying unsecured API endpoints.</li>
          <li><strong>Automating Attacks:</strong> Deploying scripts to send rapid sequences of requests.</li>
          <li><strong>Evasion Techniques:</strong> Utilizing IP spoofing and proxy rotation to bypass security measures.</li>
        </ol>
        <h2>Security Insights</h2>
        <p>
          These exploits, while inherently dangerous, expose critical vulnerabilities in our digital infrastructure. Understanding their operation is a call to bolster API security and develop innovative defensive measures.
        </p>
        <h2>Creative Disruption</h2>
        <p>
          By dissecting the techniques used by OTP bombers, we can reimagine security practices that not only protect but also encourage technological creativity. This dual perspective is key to evolving our digital defenses.
        </p>
        <h2>Conclusion</h2>
        <p>
          This exploration serves as both a technical deep-dive and a creative inquiry—challenging us to innovate and improve the resilience of our digital systems.
        </p>
      `
    },
    post3: {
      title: "Cybersecurity in the Age of AI: Balancing Innovation and Protection",
      date: "June 10, 2025",
      content: `
        <h2>Introduction</h2>
        <p>
          In a world where AI drives both innovation and cyber threats, maintaining security requires a delicate balance. This article examines the evolving landscape of cybersecurity and the strategies needed to safeguard our digital future.
        </p>
        <h2>Emerging Threats</h2>
        <p>
          AI-powered attacks have redefined traditional security paradigms. Automated threats now adapt and evolve faster than ever before, demanding a proactive and agile defense.
        </p>
        <h2>Defensive Strategies</h2>
        <p>
          Organizations must adopt a multifaceted approach, including:
        </p>
        <ul>
          <li>Integrating AI-driven threat detection systems.</li>
          <li>Implementing robust encryption and multi-factor authentication.</li>
          <li>Regularly updating and patching vulnerabilities.</li>
        </ul>
        <h2>Balancing Act</h2>
        <p>
          The key challenge is to foster innovation without compromising security. Forward-thinking companies are finding creative ways to merge cutting-edge technology with robust protective measures.
        </p>
        <h2>Conclusion</h2>
        <p>
          Cybersecurity in the age of AI is about creating systems that are both resilient and inspiring. By embracing innovative defense strategies, we can pave the way for a secure and dynamic digital future.
        </p>
      `
    }
  };
  
  // Add click event listeners to each blog card
  document.querySelectorAll(".blog-card").forEach(card => {
    card.addEventListener("click", () => {
      const postId = card.getAttribute("data-post");
      openPost(postId);
    });
  });
  
  // Function to open modal with selected post content
  function openPost(postId) {
    const post = blogPosts[postId];
    if (post) {
      const modalBody = document.getElementById("modal-body");
      modalBody.innerHTML = `
        <h2 class="modal-title">${post.title}</h2>
        <p class="modal-date">${post.date}</p>
        ${post.content}
      `;
      document.getElementById("blogModal").style.display = "block";
    }
  }
  
  // Function to close the modal
  function closeModal() {
    document.getElementById("blogModal").style.display = "none";
  }
  
  // Close modal when clicking outside the modal content
  window.onclick = function(event) {
    const modal = document.getElementById("blogModal");
    if (event.target === modal) {
      closeModal();
    }
  };
  