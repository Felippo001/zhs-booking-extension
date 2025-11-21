export function injectCourseCardStyles() {
  if (document.getElementById("myExt-course-styles")) return;

  const style = document.createElement("style");
  style.id = "myExt-course-styles";
  style.textContent = `
      .myExt-course-card {
        font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
        max-width: 420px;
        padding: 14px 18px;
        margin: 12px auto;
        border-radius: 10px;
        background: #ffffff;
        box-shadow: 0 6px 18px rgba(0, 0, 0, 0.08);
        border: 1px solid rgba(0, 0, 0, 0.04);
        display: flex;
        flex-direction: column;
        gap: 10px;
        box-sizing: border-box;
        position: relative;
        overflow: hidden;
      }
  
      .myExt-course-card::before {
        content: "";
        position: absolute;
        inset: 0;
        background: linear-gradient(135deg, #3b82f6, #22c55e);
        opacity: 0.05;
        pointer-events: none;
      }
  
      .myExt-course-header {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        gap: 12px;
        position: relative;
        z-index: 1;
      }
  
      .myExt-course-title {
        font-weight: 600;
        font-size: 14px;
        color: #111827;
      }
  
      .myExt-course-sub {
        font-size: 15px;
        font-weight: 600;
        color: #1f2937;
      }
  
      .myExt-course-slots {
        font-size: 12px;
        padding: 4px 8px;
        border-radius: 999px;
        background: #ecfdf5;
        color: #166534;
        font-weight: 500;
        white-space: nowrap;
      }
  
      .myExt-course-slots--low {
        background: #fef3c7;
        color: #92400e;
      }
  
      .myExt-course-slots--none {
        background: #fee2e2;
        color: #b91c1c;
      }
  
      .myExt-course-footer {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        gap: 8px;
        position: relative;
        z-index: 1;
      }
  
      .myExt-course-button {
        border: none;
        border-radius: 999px;
        padding: 6px 14px;
        font-size: 13px;
        font-weight: 500;
        cursor: pointer;
        background: linear-gradient(135deg, #3b82f6, #2563eb);
        color: #ffffff;
        display: inline-flex;
        align-items: center;
        gap: 6px;
        box-shadow: 0 4px 10px rgba(37, 99, 235, 0.35);
        transition: transform 0.08s ease, box-shadow 0.08s ease, filter 0.08s ease;
      }
  
      .myExt-course-button:hover {
        transform: translateY(-1px);
        box-shadow: 0 6px 16px rgba(37, 99, 235, 0.45);
        filter: brightness(1.05);
      }
  
      .myExt-course-button:active {
        transform: translateY(0);
        box-shadow: 0 3px 8px rgba(37, 99, 235, 0.3);
        filter: brightness(0.97);
      }
  
      .myExt-course-button-icon {
        font-size: 14px;
        line-height: 1;
      }
  
      .myExt-course-not-available {
        font-size: 12px;
        padding: 4px 10px;
        border-radius: 999px;
        background: #f3f4f6;
        color: #6b7280;
        font-weight: 500;
      }
    `;

  style.textContent += `
    .myExt-week-btn-wrapper {
      max-width: 420px;
      margin: 20px auto 14px;
    }

    .myExt-week-btn {
      width: 100%;
      padding: 10px 16px;
      font-size: 14px;
      font-weight: 500;
      border-radius: 12px;
      border: none;
      cursor: pointer;
      background: linear-gradient(135deg, #10b981, #059669);
      color: white;
      box-shadow: 0 4px 12px rgba(16, 185, 129, 0.35);
      transition: transform 0.08s ease, box-shadow 0.08s ease, filter 0.08s ease;
    }

    .myExt-week-btn:hover {
      transform: translateY(-1px);
      filter: brightness(1.04);
      box-shadow: 0 6px 16px rgba(16, 185, 129, 0.45);
    }

    .myExt-week-btn:active {
      transform: translateY(0);
      filter: brightness(0.97);
      box-shadow: 0 3px 8px rgba(16, 185, 129, 0.3);
    }
`;
  document.head.appendChild(style);
}
