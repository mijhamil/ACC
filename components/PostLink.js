const PostLink = ({ post }) => (
    <li>
      <Link as={`/p/${post.id}`} href={`/post?title=${post.title}`}>
        <a>{post.title}</a>
      </Link>
      <style jsx>{`
        li {
          list-style: none;
          margin: 5px 0;
        }
  
        a {
          text-decoration: none;
          color: blue;
          font-family: "Arial";
        }
  
        a:hover {
          opacity: 0.6;
        }
      `}</style>
    </li>
  )