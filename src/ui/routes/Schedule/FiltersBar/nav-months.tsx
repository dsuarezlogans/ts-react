import * as React from 'react';

export interface NavMonthsProps {
}

export default class NavMonths extends React.Component<NavMonthsProps, any> {
  public render() {
    return (
      <div className="df-nav-list">
        <a href="#" className="df-nav-item">Jan</a>
        <a href="#" className="df-nav-item">Feb</a>
        <a href="#" className="df-nav-item">Mar</a>
        <a href="#" className="df-nav-item">Apr</a>
        <a href="#" className="df-nav-item">Jun</a>
        <a href="#" className="df-nav-item">Jul</a>
        <a href="#" className="df-nav-item">Aug</a>
        <a href="#" className="df-nav-item">Sep</a>
        <a href="#" className="df-nav-item">Oct</a>
        <a href="#" className="df-nav-item">Nov</a>
        <a href="#" className="df-nav-item">Dic</a>
      </div>
    );
  }
}
