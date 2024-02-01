const defaultMeetingData = `<span class="z3Aajf" jsaction="GvneHb:eCVuQc" jscontroller="NXDlyf"
><div
  jsaction="rcuQ6b:rcuQ6b"
  jscontroller="ymEVmc"
  class="MQKmmc SudKRc xFmxSe wYNW7d"
>
  <span jsname="W5i7Bf">5:35</span
  ><span jsname="d1rraf" class="O7id6c">PM</span>
</div>
<div role="separator" class="g2yd9"></div
></span>
<div
class="gSlHI"
jsaction="rcuQ6b:npT2md;VxKw1d:WXbfQc;mNaDgf:WXbfQc;AJZkAd:WXbfQc;jPM0fe:kJ5Jgf"
jscontroller="XMlCJe"
style=""
>
<div jsname="z7Oi7b" class="Cpvy4b V7iHrd">
  <div class="Qp8KI">
    <div class="uBRSj" tt-id="ucc-8">
      <span data-is-tooltip-wrapper="true" class="uBRSj"
        ><div
          jscontroller="yEvoid"
          jsaction="mouseenter:tfO1Yc; focus:AHmuwe; blur:O22p3e; mouseleave:JywGue; touchstart:p6p2H; touchend:yfqBxc;mlnRJb:fLiPzd"
          data-tooltip-id="ucc-8"
          data-tooltip-x-position="3"
          data-tooltip-y-position="2"
          jsname="NeC6gb"
          class="u6vdEc ouH3xe"
        >
          cen-ypeo-wkf
        </div>
        <div
          class="EY8ABd-OWXEXe-TAWMXe"
          role="tooltip"
          aria-hidden="true"
          id="ucc-8"
        >
          cen-ypeo-wkf
        </div></span
      >
    </div>
  </div>
</div>
</div>
`;

const btnCss = `<div class="fswXR jb1oQc KUNJSe" style="
display: flex;
align-items: center;">
<div class="j7Qpp">
  <div class="GKGgdd" jsname="Dg9Wp" jsmodel="DJnhFb">
  <button
    id="joinMeetingBtn"
    style="
    cursor: pointer;
      font-family: sans-serif;
      --button-color: #0f75ae;
      --button-text-color: #fff;
      box-sizing: border-box;
      padding: 0.4rem 1rem;
      border-radius: 1.5rem;
      box-shadow: shadow(low);
      border: 1px solid var(--button-color);
      background-color: var(--button-color);
      color: var(--button-text-color);
      font-size: 1rem;
      display: inline-flex;
      justify-content: center;
      align-items: center;
    "
  >
    <svg
      style="width: 20px; height: 20px"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <circle cx="12" cy="12" r="12" fill="#d40000" />
      <polygon points="9 6 9 18 18 12" fill="#fff" />
    </svg>
  </button>
    <div jsname="fkOh8c" class="BK7Qrb EX4sVc"></div>
  </div>
</div>
</div>`;

const startRecordingBtn = `<button
  id="joinMeetingBtn"
  style="
    font-family: sans-serif;
    --button-color: #0f75ae;
    --button-text-color: #fff;
    cursor: pointer;
    box-sizing: border-box;
    padding: 0.4rem 1rem;
    border-radius: 1.5rem;
    box-shadow: shadow(low);
    border: 1px solid var(--button-color);
    background-color: var(--button-color);
    color: var(--button-text-color);
    font-size: 1rem;
    display: inline-flex;
    justify-content: center;
    align-items: center;
  "
>
  <svg
    style="width: 20px; height: 20px"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
  >
    <circle cx="12" cy="12" r="12" fill="#d40000" />
    <polygon points="9 6 9 18 18 12" fill="#fff" />
  </svg>
</button>
  `;

const endRecordingBtn = `<button
  id="leaveMeetingBtn"
  style="
    font-family: sans-serif;
    --button-color: #0f75ae;
    cursor: pointer;
    --button-text-color: #fff;
    box-sizing: border-box;
    padding: 0.4rem 1rem;
    border-radius: 1.5rem;
    box-shadow: shadow(low);
    border: 1px solid var(--button-color);
    background-color: var(--button-color);
    color: var(--button-text-color);
    font-size: 1rem;
    display: inline-flex;
    justify-content: center;
    align-items: center;
  "
>
<svg style="width: 20px; height: 20px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" >
  <rect x="5" y="5" width="13" height="13" fill="#111"/>
</svg> 
</button>
  `;

const recordingMessage = `<span class="z3Aajf" jsaction="GvneHb:eCVuQc" jscontroller="NXDlyf">
<div role="separator" class="g2yd9"></div>
<div
  jsaction="rcuQ6b:rcuQ6b"
  jscontroller="ymEVmc"
  class="MQKmmc SudKRc xFmxSe wYNW7d"
>
  <div style="color: beige; animation: flash 1s infinite alternate;"
    >Recording</div
  >
</div>
</span>
`;

console.log('running');

(function () {
  let defaultMeetingData;
  let joinButton;
  let leaveButton;

  function handleStartRecordingBtnClick() {
    function random(max) {
      return Math.random() * (max - 0) + 0;
    }

    var confettiEl = document.createDocumentFragment();
    for (var i = 0; i < 100; i++) {
      var styles =
        'transform: translate3d(' +
        (random(500) - 250) +
        'px, ' +
        (random(200) - 150) +
        'px, 0) rotate(' +
        random(360) +
        'deg);\
            background: hsla(248, 53%, 58%,1);\
            animation: bang 700ms ease-out forwards;\
            display: block;\
            opacity: 0; left: 50%; position: absolute; top: 0; width: 3px; height: 8px; ';

      var e = document.createElement('i');
      e.style.cssText = styles.toString();
      confettiEl.appendChild(e);
    }
    joinButton.append(confettiEl);

    const parentEl = joinButton.parentElement;
    parentEl.innerHTML = endRecordingBtn;

    leaveButton = document.getElementById('leaveMeetingBtn');
    leaveButton.addEventListener('click', handleEndRecordingBtnClick);

    try {
      let el = document.getElementsByClassName('lefKC');
      if (el) {
        defaultMeetingData = el[0].innerHTML;
        el[0].innerHTML = el[0].innerHTML + recordingMessage;
      }
    } catch (e) {
      console.log('Ran into an error');
      console.log(e);
    }
  }

  function handleEndRecordingBtnClick() {
    const parentEl = leaveButton.parentElement;
    parentEl.innerHTML = startRecordingBtn;

    joinButton = document.getElementById('joinMeetingBtn');
    joinButton.addEventListener('click', handleStartRecordingBtnClick);

    try {
      let el = document.getElementsByClassName('lefKC');
      if (el) {
        el[0].innerHTML = defaultMeetingData;
      }
    } catch (e) {
      console.log('Ran into an error');
      console.log(e);
    }
  }

  const myInterval = setInterval(() => {
    if (window.location.hostname === 'meet.google.com') {
      try {
        const uniqueEl = document.querySelector("div[jsname='z7Oi7b']");
        if (!uniqueEl) {
          throw Error('err');
        }
        let el = document.querySelector("div[jsname='H7Z7Vb']");
        el.innerHTML = btnCss + el.innerHTML;
        console.log('Running code periodically');

        joinButton = document.getElementById('joinMeetingBtn');
        joinButton.addEventListener('click', handleStartRecordingBtnClick);

        clearInterval(myInterval);
      } catch {
        console.log('Running');
      }
    }
  }, 5000);
})();
