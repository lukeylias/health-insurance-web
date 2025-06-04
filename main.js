document.addEventListener("DOMContentLoaded", function () {
  const stepPages = document.querySelectorAll(".step-page");
  const steps = document.querySelectorAll(".step");
  const stepLabel = document.getElementById("step-label");
  const totalSteps = steps.length;
  let currentStep = 0;

  function showStep(nextIdx) {
    const currentIdx = [...stepPages].findIndex((page) =>
      page.classList.contains("active")
    );
    if (currentIdx === nextIdx) return;

    const currentPage = stepPages[currentIdx];
    const nextPage = stepPages[nextIdx];

    // Animate out current page
    if (currentPage) {
      currentPage.classList.remove("active");
      currentPage.classList.add("exit");
      setTimeout(() => {
        currentPage.classList.remove("exit", "exit-active");
      }, 300);
      setTimeout(() => {
        currentPage.classList.add("exit-active");
      }, 10);
    }

    // Animate in next page
    if (nextPage) {
      nextPage.classList.add("enter");
      setTimeout(() => {
        nextPage.classList.add("active", "enter-active");
        nextPage.classList.remove("enter");
      }, 10);
      setTimeout(() => {
        nextPage.classList.remove("enter-active");
      }, 310);
    }

    // Update stepper
    steps.forEach((step, i) => {
      step.classList.toggle("active", i === nextIdx);
    });

    // Update step label
    if (stepLabel) {
      stepLabel.textContent = `Step ${nextIdx + 1} of ${totalSteps}`;
    }

    currentStep = nextIdx;
  }

  // Step 1: Residency form
  const residencyForm = document.getElementById("residency-form");
  if (residencyForm) {
    residencyForm.addEventListener("submit", function (e) {
      e.preventDefault();
      showStep(1);
    });
  }

  // Step 2: Help form
  const helpForm = document.getElementById("help-form");
  if (helpForm) {
    helpForm.addEventListener("submit", function (e) {
      e.preventDefault();
      showStep(2);
    });

    // Back button for step 2
    const backBtn = helpForm.querySelector(".back-btn");
    if (backBtn) {
      backBtn.addEventListener("click", function () {
        showStep(0);
      });
    }
  }

  // Step 3: About form
  const aboutForm = document.getElementById("about-form");
  if (aboutForm) {
    aboutForm.addEventListener("submit", function (e) {
      e.preventDefault();
      showStep(3);
    });

    // Back button for step 3
    const backBtn = aboutForm.querySelector(".back-btn");
    if (backBtn) {
      backBtn.addEventListener("click", function () {
        showStep(1);
      });
    }
  }

  // Step 4: Treatments form
  const treatmentsForm = document.getElementById("treatments-form");
  if (treatmentsForm) {
    treatmentsForm.addEventListener("submit", function (e) {
      e.preventDefault();
      alert("Treatments submitted!");
    });

    // Back button for step 4
    const backBtn = treatmentsForm.querySelector(".back-btn");
    if (backBtn) {
      backBtn.addEventListener("click", function () {
        showStep(2);
      });
    }
  }

  // Show the first step on load and set initial label
  showStep(currentStep);
  if (stepLabel) {
    stepLabel.textContent = `Step 1 of ${totalSteps}`;
  }
});
