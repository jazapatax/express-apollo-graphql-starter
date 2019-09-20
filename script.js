const publicationsContainer = document.querySelector("#publication-container");
const form = document.querySelector("#publication-search");

const getpublicationsQuery = () => `{ getAllPublications { _id name category likes } }`;

const renderPublications = ({ data }) => {console.log(data);
  const { getAllPublications = [] } = data;

  while (publicationsContainer.firstChild) {
    publicationsContainer.removeChild(publicationsContainer.firstChild);
  }

  const publicationsFragment = document.createDocumentFragment();
  const publicationsList = document.createElement('ul');

  getAllPublications.forEach((publication) => {
    const publicationsListItem = document.createElement('li');
    const publicationsListLink = document.createElement('a');
    publicationsListLink.href = publication.url;
    publicationsListLink.textContent = "Click To View";
    publicationsListItem.textContent = `${publication.name} - ${publication.category}`;
    publicationsListItem.appendChild(publicationsListLink);
    publicationsList.appendChild(publicationsListItem);
  });

  publicationsFragment.appendChild(publicationsList);
  publicationsContainer.appendChild(publicationsFragment);
}

const loadPublications = (ev) => {
  ev.preventDefault();
  const keyword = form.elements["search"].value;

  const options = {
    method: "post",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      query: getpublicationsQuery(keyword)
    })
  };

  fetch(`http://localhost:4444/graphql`, options)
    .then(res => res.json())
    .then(renderPublications);

  form.reset();
}

form.addEventListener("submit", loadPublications)
