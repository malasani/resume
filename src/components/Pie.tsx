
import * as React from 'react';
import * as Slice from './Slice';

interface PieProps {
	data: Array<number>;
	radius: number;
	hole: number;
	colors: Array<string>;
	labels: boolean;
	percent: boolean;
	strokeWidth: number;
	stroke: string;
}

export class Pie extends React.Component<PieProps, undefined> {

	public render() {

		let colors = this.props.colors,
			colorsLength = colors.length,
			labels = this.props.labels,
			hole = this.props.hole,
			radius = this.props.radius,
			diameter = radius * 2,
			self = this,
			sum: number, startAngle: number, d = null;

		sum = this.props.data.reduce(function (carry, current) { return carry + current }, 0);
		startAngle = 0;

		return (
			<svg width={diameter} height={diameter} viewBox={'0 0 ' + diameter + ' ' + diameter} xmlns="http://www.w3.org/2000/svg" version="1.1">
				{
					this.props.data.map(
						function (slice, sliceIndex) {
							var angle: number, nextAngle: number, percent: number;

							nextAngle = startAngle;
							angle = (slice / sum) * 360;
							percent = (slice / sum) * 100;
							startAngle += angle;
							return <Slice.Slice
								key={sliceIndex}
								value={slice}
								percent={self.props.percent}
								percentValue={Number.parseFloat(percent.toFixed(1))}
								startAngle={nextAngle}
								angle={angle}
								radius={radius}
								hole={radius - hole}
								trueHole={hole}
								showLabel={self.props.labels}
								fill={colors[sliceIndex % colorsLength]}
								stroke={self.props.stroke}
								strokeWidth={self.props.strokeWidth}

							/>
						})}
				<text x="150" y="150" text-anchor="middle" >116 Reviews</text>
			</svg>
		);
	}
}


