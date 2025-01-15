import React, { Component } from 'react'


export class NewsItem extends Component {

    render() {
        let { title, description, imageurl, newsUrl, author,source } = this.props;
        return (
            <>
                <div>
                    <div className="card" style={{ width: "18rem" }}>
                        <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                            {source}
                            <span class="visually-hidden">unread messages</span>
                        </span>
                        <img src={!imageurl ? "https://images.cointelegraph.com/cdn-cgi/image/format=auto,onerror=redirect,quality=90,width=1200/https://s3.cointelegraph.com/uploads/2025-01/019425f8-a1b0-7400-98a9-30b40a6f2bf7" : imageurl} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">{title}</h5>
                            <p className="card-text">{description}...</p>
                            <p className="card-text"><small className="text-body-secondary">By {author ? author : "Unknown"}</small></p>
                            <a href={newsUrl} target="_blank" rel="noreferrer noopener" className="btn btm-sm btn-primary">Learn More</a>

                        </div>
                    </div>
                </div>

            </>
        )
    }
}

export default NewsItem
