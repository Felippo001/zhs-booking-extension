export function injectExtensionBanner() {
    // Prevent duplicates
    if (document.getElementById("myExt-banner")) return;
  
    // --- Inject CSS ---
    const style = document.createElement("style");
    style.id = "myExt-banner-style";
    style.textContent = `
      .myExt-banner {
        width: 100%;
        padding: 5px;
        box-sizing: border-box;
  
        background: #ffffff;
        border-bottom: 1px solid rgba(0, 0, 0, 0.06);
        box-shadow: 0 4px 14px rgba(0, 0, 0, 0.07);
  
        font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
        font-size: 15px;
        font-weight: 600;
        color: #1f2937;
  
        display: flex;
        align-items: center;
        justify-content: center;
  
        position: relative;
        overflow: hidden;
      }
  
      .myExt-banner::before {
        content: "";
        position: absolute;
        inset: 0;
        background: linear-gradient(135deg, #3b82f6, #22c55e);
        opacity: 0.05;
        pointer-events: none;
      }
  
      .myExt-banner-content {
        position: relative;
        z-index: 1;
      }
    `;
    document.head.appendChild(style);
  
    // --- Create the banner ---
    const banner = document.createElement("div");
    banner.id = "myExt-banner";
    banner.className = "myExt-banner";
  
    const label = document.createElement("span");
    label.className = "myExt-banner-content";
    label.textContent = "zhs-booking-extension";
  
    banner.appendChild(label);
  
    // Insert at the top of <body>
    document.body.prepend(banner);
  
    return banner;
  }
  