import axios from 'axios';
import path from 'path';

export default {
  getRoutes: async () => {
    const { data: posts } = await axios.get(
      'https://jsonplaceholder.typicode.com/posts'
    );

    return [
      {
        path: '/blog',
        getData: () => ({
          posts
        }),
        children: posts.map(post => ({
          path: `/post/${post.id}`,
          template: 'src/containers/Post',
          getData: () => ({
            post
          })
        }))
      }
    ];
  },
  plugins: [
    [
      require.resolve('react-static-plugin-source-filesystem'),
      {
        location: path.resolve('./src/pages')
      }
    ],
    require.resolve('react-static-plugin-react-router'),
    require.resolve('react-static-plugin-sitemap')
  ]
};
