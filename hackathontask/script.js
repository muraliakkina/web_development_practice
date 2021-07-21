async function dataFetch() {
  let data = await fetch("https://api.openbrewerydb.org/breweries", {
    method: "GET"
  });
  data = await data.json();
  userLoading(data);
}

dataFetch();

function userLoading(details) {
  var conatiner = document.createElement("div");
  conatiner.className = "conatiner";
  const heading = document.createElement("div");
  heading.className = "mini-container heading-style";
  const headingName = document.createElement("div");
  headingName.innerText = "NAME";
  heading.append(headingName);

  const headingType = document.createElement("div");
  headingType.innerText = "TYPE";
  heading.append(headingType);

  const headingAddress = document.createElement("div");
  headingAddress.innerText = "ADDRESS";
  heading.append(headingAddress);

  const headingWeb = document.createElement("div");
  headingWeb.innerText = "WEBSITE";
  heading.append(headingWeb);

  const headingMobile = document.createElement("div");
  headingMobile.innerText = "PHONE NO";
  heading.append(headingMobile);
  conatiner.append(heading);

  details.forEach((element) => {
    const userContainer = document.createElement("div");
    userContainer.className = "mini-container";
    const name = document.createElement("div");
    name.innerText = element.name;
    userContainer.append(name);
    const type = document.createElement("div");
    type.innerText = element.brewery_type;
    userContainer.append(type);
    const address = document.createElement("div");
    const strt = document.createElement("div");
    if (element.street) {
      strt.innerText = element.street;
      address.append(strt);
    }

    const ad_line1 = document.createElement("div");
    if (element.address_2) {
      ad_line1.innerText = element.address_2;
      address.append(ad_line1);
    }

    const ad_line2 = document.createElement("div");
    if (element.address_3) {
      ad_line2.innerText = element.address_3;
      address.append(ad_line2);
    }

    const place = document.createElement("div");
    if (element.city) {
      place.innerText = element.city;
      address.append(place);
    }

    const rastram = document.createElement("div");
    if (element.state) {
      rastram.innerText = element.state;
      address.append(rastram);
    }

    const province = document.createElement("div");
    if (element.county_province) {
      province.innerText = element.county_province;
      address.append(province);
    }

    const pc = document.createElement("div");
    if (element.postal_code) {
      pc.innerText = element.postal_code;
      address.append(pc);
    }

    const countryName = document.createElement("div");
    if (element.country) {
      countryName.innerText = element.country;
      address.append(countryName);
    }
    userContainer.append(address);

    const web = document.createElement("div");
    web.className = "website-alignment";
    if (element.website_url) {
      web.innerText = element.website_url;
      userContainer.append(web);
    } else {
      element.website_url = "Not Specified";
      web.innerText = element.website_url;
      userContainer.append(web);
    }
    const mobile = document.createElement("div");
    if (element.phone) {
      mobile.innerText = element.phone;
      userContainer.append(mobile);
    } else {
      element.phone = "Not Specified";
      mobile.innerText = element.phone;
      userContainer.append(mobile);
    }
    conatiner.append(userContainer);
  });
  document.body.append(conatiner);
}
