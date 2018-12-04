import React, {Component} from 'react';

class Song extends Component{
  constructor(props){
    super(props);

    this.getTitle = this.getTitle.bind(this);
  }

  getTitle(){
    let title = this.props.song.title.label;
    title = title.substring(0, title.indexOf('-'));
    return title;
  }

  getArtist(){
    let title = this.props.song.title.label;
    title = title.substring(title.indexOf('-')+1, title.length);
    return title;
  }

  render(){
    return (
      <div className="song">
        <img src={this.props.song["im:image"][2].label} alt={this.getTitle()} />
        <p>{`Chart Position: ${this.props.chartPosition}`}</p>
        <p>{`Title: ${this.getTitle()}`}</p>
        <p>{`Artist: ${this.getArtist()}`}</p>
      </div>
    )
  }
}

export default Song;
