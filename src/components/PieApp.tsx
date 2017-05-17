/*import * as React from 'react';

interface IComponentNameProps {}

interface IComponentNameState {}

class ComponentName extends React.Component<IComponentNameProps, IComponentNameState> {
  public render() {
	return (
	  <span>Body</span>
	);
  }
}

export default ComponentName;

var App = React.createClass({
	getInitialState: function () {
		return {
			data: [5, 12, 8, 3, 10]
		}
	},
	componentDidMount: function () {
		setInterval(function () {
			var dataSize = getRandomInt(2, 6), data = [];

			for (; dataSize--; ) {
				data.push(getRandomInt(1, 20));
			}

			this.setState({ data: data });

		}.bind(this), 2000);
	},
	render: function () {
		var colors = ['#43A19E', '#7B43A1', '#F2317A', '#FF9824', '#58CF6C'];

		return (
		<div>
			<Pie
				data={ this.state.data }
				radius={ 150 }
				hole={ 50 }
				colors={ colors }
				labels={ true }
				percent={ true }
				strokeWidth={ 3 }
				stroke={ '#fff' }
			/>

			<Pie
				data={ this.state.data }
				radius={ 80 }
				hole={ 5 }
				colors={ colors }
				strokeWidth={ 3 }
        labels={ true }
			/>

			<Pie
				data={ this.state.data }
				radius={ 80 }
				hole={ 65 }
				colors={ colors }
				strokeWidth={ 1 }
			/>

			<Pie
				data={ this.state.data }
				radius={ 150 }
				hole={ 0 }
				colors={ colors }
				strokeWidth={ 1 }
				stroke={ 'rgba(0, 0, 0, .5)' }
			/>
		</div>
		);
	}
});

function getAnglePoint(startAngle, endAngle, radius, x, y) {
	var x1, y1, x2, y2;

	x1 = x + radius * Math.cos(Math.PI * startAngle / 180);
	y1 = y + radius * Math.sin(Math.PI * startAngle / 180);
	x2 = x + radius * Math.cos(Math.PI * endAngle / 180);
	y2 = y + radius * Math.sin(Math.PI * endAngle / 180);

	return { x1, y1, x2, y2 };
}

function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min)) + min;
}*/
