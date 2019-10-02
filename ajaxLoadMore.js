import axios from 'axios';


const ajaxLoadMore = () => {

  const button = document.querySelector('.load-more');

  if (typeof (button) != 'undefined' && button != null) {

    button.addEventListener('click', (e) => {
      e.preventDefault();

      let current_page = document.querySelector('.posts-list').dataset.page;
      let max_pages = document.querySelector('.posts-list').dataset.max;

      let params = new URLSearchParams();
      params.append('action', 'load_more_posts');
      params.append('current_page', current_page);
      params.append('max_pages', max_pages);

      axios.post('/wp-admin/admin-ajax.php', params)
        .then(res => {

          let posts_list = document.querySelector('.posts-list');

          posts_list.innerHTML += res.data.data;

          let getUrl = window.location;
          let baseUrl = getUrl.protocol + "//" + getUrl.host + "/";

          window.history.pushState('', '', baseUrl + 'page/' + (parseInt(document.querySelector('.posts-list').dataset.page) + 1));

          console.log(parseInt(document.querySelector('.posts-list').dataset.page));

          document.querySelector('.posts-list').dataset.page++;

          if (document.querySelector('.posts-list').dataset.page == document.querySelector('.posts-list').dataset.max) {
            button.parentNode.removeChild(button);
          }

        })

    });

  }

}

export default ajaxLoadMore;
