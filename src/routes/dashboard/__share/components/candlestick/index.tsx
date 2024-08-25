import ReactECharts from 'echarts-for-react';
import React from 'react';
import * as echarts from 'echarts';
import { Manager } from '../../model/manager';

const canvasHeight = 500;

/* k线图 */
export const Candlestick = React.memo(({ manager }: { manager?: Manager }) => {
  if (!manager) {
    return <div style={{ height: canvasHeight }} />;
  }
  const { chartData: data } = manager;
  const option = {
    animation: false,
    legend: {
      bottom: 4,
      left: 'center',
      data: ['candle', 'MA5', 'MA10', 'MA20', 'MA30'],
      selected: {
        MA5: false,
        MA10: false,
        MA20: false,
        MA30: false,
      },
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross',
      },
      borderWidth: 1,
      borderColor: '#ccc',
      textStyle: {
        color: '#000',
      },
      backgroundColor: 'rgba(255, 255, 255, 0.8)',
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      position: (pos: any, _params: any, _el: any, _elRect: any, size: any) => {
        const obj: { top: number; left?: number; right?: number } = { top: 10 };
        const bool = pos[0] < size.viewSize[0] / 2;
        obj[bool ? 'right' : 'left'] = 30;
        return obj;
      },
      extraCssText: 'width: 170px',
    },
    axisPointer: {
      link: { xAxisIndex: 'all' },
      label: {
        backgroundColor: '#777',
      },
    },
    toolbox: {
      feature: {
        dataZoom: {
          yAxisIndex: false,
        },
        brush: {
          type: ['lineX', 'clear'],
        },
      },
    },
    brush: {
      xAxisIndex: 'all',
      brushLink: 'all',
      outOfBrush: {
        colorAlpha: 0.1,
      },
    },
    grid: [
      {
        left: '4%',
        right: '2%',
        top: 40,
        height: '50%',
      },
      {
        left: '4%',
        right: '2%',
        bottom: '20%',
        height: '15%',
      },
    ],
    xAxis: [
      {
        type: 'category',
        data: data.categoryData,
        scale: true,
        boundaryGap: false,
        axisLine: { onZero: false },
        splitLine: { show: false },
        splitNumber: 20,
        min: 'dataMin',
        max: 'dataMax',
        axisPointer: {
          z: 100,
        },
      },
      {
        type: 'category',
        gridIndex: 1,
        data: data.categoryData,
        scale: true,
        boundaryGap: false,
        axisLine: { onZero: false },
        axisTick: { show: false },
        splitLine: { show: false },
        axisLabel: { show: false },
        splitNumber: 20,
        min: 'dataMin',
        max: 'dataMax',
        axisPointer: {
          label: {
            formatter: (params: any) => {
              const seriesValue = params.seriesData[0]?.value;
              return seriesValue !== null ? echarts.format.addCommas(seriesValue) : '';
            },
          },
        },
      },
    ],
    yAxis: [
      {
        scale: true,
        // splitArea: {
        //   show: true,
        // },
      },
      {
        scale: true,
        gridIndex: 1,
        splitNumber: 2,
        axisLabel: { show: false },
        axisLine: { show: false },
        axisTick: { show: false },
        splitLine: { show: false },
      },
    ],
    dataZoom: [
      {
        type: 'inside',
        xAxisIndex: [0, 1], // 控制2个x轴的缩放
        start: 50,
        end: 100,
      },
      {
        show: true,
        xAxisIndex: [0, 1],
        type: 'slider',
        top: '85%',
        start: 50,
        end: 100,
      },
    ],
    series: [
      {
        name: 'candle',
        type: 'candlestick',
        data: data.values,
        itemStyle: {
          normal: {
            // color: '#06B800',
            // color0: '#FA0000',
            // borderColor: null,
            // borderColor0: null,
          },
        },
        markLine: {
          symbol: ['none', 'none'],
          data: data.markLineData,
          lineStyle: {
            color: 'blue',
          },
        },
      },
      {
        name: 'MA5',
        type: 'line',
        showSymbol: false,
        data: data.ma5,
        smooth: true,
        lineStyle: {
          normal: { opacity: 0.5 },
        },
      },
      {
        name: 'MA10',
        type: 'line',
        showSymbol: false,
        data: data.ma10,
        smooth: true,
        lineStyle: {
          normal: { opacity: 0.5 },
        },
      },
      {
        name: 'MA20',
        type: 'line',
        showSymbol: false,
        data: data.ma20,
        smooth: true,
        lineStyle: {
          normal: { opacity: 0.5 },
        },
      },
      {
        name: 'MA30',
        type: 'line',
        showSymbol: false,
        data: data.ma30,
        smooth: true,
        lineStyle: {
          normal: { opacity: 0.5 },
        },
      },
      {
        name: 'Volume',
        type: 'bar',
        xAxisIndex: 1,
        yAxisIndex: 1,
        data: data.volumes,
      },
    ],
  };

  return <ReactECharts option={option} style={{ height: canvasHeight }} />;
});
