// Function to fetch articles from the JSON file
export async function fetchArticles() {
  try {
      const response = await fetch('json/recipe.json');
      if (!response.ok) {
          throw new Error('Network response was not ok.');
      }
      const data = await response.json();
      return data.articles;
  } catch (error) {
      console.error('Error fetching articles:', error);
      return [];
  }
}

// Function to display articles on the webpage
export async function displayArticles() {
  try {
      const articles = await fetchArticles();
      const articleList = document.querySelector('.article-list');

      articles.forEach(article => {
          const articleCard = document.createElement('div');
          articleCard.classList.add('article-card');

          const articleTitle = document.createElement('h3');
          articleTitle.textContent = article.title;
          articleTitle.classList.add('article-title');

          const articleCategory = document.createElement('p');
          articleCategory.textContent = `Category: ${article.category}`;

          const articleAuthor = document.createElement('p');
          articleAuthor.textContent = `Author: ${article.author}`;

          const articleContent = document.createElement('p');
          articleContent.textContent = article.content.substring(0, 100) + '...'; // Display a summary

          const readMoreLink = document.createElement('a');
          readMoreLink.href = 'https://spicestationsilverlake.com/spices-around-the-world-exploring-unique-and-exotic-flavors/'; // Replace with the link to the full article
          readMoreLink.textContent = 'Read More';
          readMoreLink.classList.add('read-more');

          articleCard.appendChild(articleTitle);
          articleCard.appendChild(articleCategory);
          articleCard.appendChild(articleAuthor);
          articleCard.appendChild(articleContent);
          articleCard.appendChild(readMoreLink);

          articleList.appendChild(articleCard);
      });
  } catch (error) {
      console.error('Error displaying articles:', error);
  }
}

// Call the displayArticles function when the page loads
window.addEventListener('load', displayArticles);
