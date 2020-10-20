import React from "react";

const Posts = ({posts, loading}) => {
    if (loading) {
        return <h2 className="text-primary">Loading...</h2>
    }

    return (
        <div className="row">
            {posts.map(post => (
                <div key={post.id} className="col-md-3">
                    <div className="card mb-5">
                        <img src={post.thumbnailUrl} width="100%" alt=""/>
                        <div className="card-body">
                            <h5 className="card-title">Card number {post.id}</h5>
                            <p className="card-text">
                                {post.title}
                            </p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )

}
export default Posts