import React, { Component } from 'react';
import NewsItem from './NewsItem';
import PropTypes from 'prop-types'


export class News extends Component {
  static defaultProps = {
    country: 'us',
    pageSize: 8,
    category: 'general'
  }
  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  }


  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      totalResults: 0, 
    };
  }

  async componentDidMount() {
    this.fetchArticles();
  }

  fetchArticles = async () => {
    // const { page } = this.state;
    this.setState({ loading: true });
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=a1d249ad3d004c398b077fbfa2cd1b75&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false,
    });
  };

  handlenextchange = async () => {
    const { page, totalResults } = this.state;
    if (page + 1 > Math.ceil(totalResults / this.props.pageSize)) {
      // Prevent switching to the next page if it exceeds available results
      return;
    }

    this.setState({ page: page + 1 }, this.fetchArticles);
  };

  handleprevchange = async () => {
    const { page } = this.state;
    if (page <= 1) return;

    this.setState({ page: page - 1 }, this.fetchArticles);
  };

  render() {
    const { articles, loading, page } = this.state;

    return (
      <div>
        <div className="container my-3">
          <h1 className="d-flex justify-content-center">TOP HEADLINES</h1>
          {loading ? (
            <h3 className="text-center">Loading...</h3>
          ) : (
            <div className="row my-7">
              {articles.map((element) => (
                <div className="col-md-4" key={element.url}>
                  <NewsItem
                    title={element.title}
                    description={
                      element.description
                        ? element.description.slice(0, 26)
                        : ''
                    }
                    imageurl={element.urlToImage}
                    newsUrl={element.url}
                    author={element.author}
                    date={element.publishedAt}
                    source={element.source.name}
                  />
                </div>
              ))}
            </div>
          )}
          <div className="container d-flex justify-content-between my-5">
            <button
              disabled={page <= 1}
              type="button"
              className="btn btn-danger"
              onClick={this.handleprevchange}
            >
              &larr; Previous
            </button>
            <button
              type="button"
              className="btn btn-danger"
              onClick={this.handlenextchange}
              disabled={page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)} // Disable if no more pages
            >
              Next &rarr;
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default News;
