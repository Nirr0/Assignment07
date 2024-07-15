window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-50px";
  }
}

function submitForm() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    window.location.href = `mailto:orrin.anderson38@qmail.cuny.edu?subject=Contact%20Form&body=${encodeURIComponent(message)}`;
}

function displayBrowserInfo(type) {
    let info = '';
    switch(type) {
        case 'navigator':
            info += `<p>AppName: ${navigator.appName}</p>`;
            info += `<p>Product: ${navigator.product}</p>`;
            info += `<p>AppVersion: ${navigator.appVersion}</p>`;
            info += `<p>UserAgent: ${navigator.userAgent}</p>`;
            info += `<p>Platform: ${navigator.platform}</p>`;
            info += `<p>Language: ${navigator.language}</p>`;
            break;
        case 'window':
            info += `<p>InnerHeight: ${window.innerHeight}</p>`;
            info += `<p>InnerWidth: ${window.innerWidth}</p>`;
            break;
        case 'screen':
            info += `<p>Width: ${screen.width}</p>`;
            info += `<p>Height: ${screen.height}</p>`;
            info += `<p>AvailWidth: ${screen.availWidth}</p>`;
            info += `<p>AvailHeight: ${screen.availHeight}</p>`;
            info += `<p>ColorDepth: ${screen.colorDepth}</p>`;
            info += `<p>PixelDepth: ${screen.pixelDepth}</p>`;
            break;
        case 'location':
            info += `<p>Href: ${window.location.href}</p>`;
            info += `<p>Hostname: ${window.location.hostname}</p>`;
            info += `<p>Pathname: ${window.location.pathname}</p>`;
            info += `<p>Protocol: ${window.location.protocol}</p>`;
            break;
        case 'geolocation':
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(function(position) {
                    info += `<p>Latitude: ${position.coords.latitude}</p>`;
                    info += `<p>Longitude: ${position.coords.longitude}</p>`;
                    document.getElementById('info').innerHTML = info;
                    document.getElementById('info').style.display = 'block';
                });
                return;
            } else {
                info += "<p>Geolocation is not supported by this browser.</p>";
            }
            break;
    }
    document.getElementById('info').innerHTML = info;
    document.getElementById('info').style.display = 'block';
}
