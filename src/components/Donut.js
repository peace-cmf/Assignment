import React   from 'react';
import HighchartsReact from "highcharts-react-official"
import Highcharts  from "highcharts"
const arr=[
  {
  "timestamp": "2022-09-07T11:07:08.484Z",
  "data": [
  {
  "source": "twitter",
  "data": {
  "count": 21,
  "engagements": 25
  }
  },
  {
  "source": "instagram",
  "data": {
  "count": 31,
  "engagements": 7
  }
  }
  ]
  },
  {
  "timestamp": "2022-09-08T11:07:08.484Z",
  "data": [
  {
  "source": "twitter",
  "data": {
  "count": 57,
  "engagements": 20
  }
  },
  {
  "source": "instagram",
  "data": {
  "count": 14,
  "engagements": 7
  }
  }
  ]
  },
  {
  "timestamp": "2022-09-09T11:07:08.484Z",
  "data": [
  {
  "source": "twitter",
  "data": {
  "count": 96,
  "engagements": 18
  }
  },
  {
  "source": "instagram",
  "data": {
  "count": 43,
  "engagements": 9
  }
  }
  ]
  },
  {
  "timestamp": "2022-09-10T11:07:08.484Z",
  "data": [
  {
  "source": "twitter",
  "data": {
  "count": 94,
  "engagements": 23
  }
  },
  {
  "source": "instagram",
  "data": {
  "count": 36,
  "engagements": 9
  }
  }
  ]
  },
  {
  "timestamp": "2022-09-11T11:07:08.484Z",
  "data": [
  {
  "source": "twitter",
  "data": {
  "count": 77,
  "engagements": 29
  }
  },
  {
  "source": "instagram",
  "data": {
  "count": 29,
  "engagements": 7
  }
  }
  ]
  },
  {
  "timestamp": "2022-09-12T11:07:08.484Z",
  "data": [
  {
  "source": "twitter",
  "data": {
  "count": 89,
  "engagements": 24
  }
  },
  {
  "source": "instagram",
  "data": {
  "count": 35,
  "engagements": 9
  }
  }
  ]
  },
  {
  "timestamp": "2022-09-13T11:07:08.484Z",
  "data": [
  {
  "source": "twitter",
  "data": {
  "count": 94,
  "engagements": 25
  }
  },
  {
  "source": "instagram",
  "data": {
  "count": 31,
  "engagements": 14
  }
  }
  ]
  },
  {
  "timestamp": "2022-09-14T11:07:08.484Z",
  "data": [
  {
  "source": "twitter",
  "data": {
  "count": 84,
  "engagements": 15
  }
  },
  {
  "source": "instagram",
  "data": {
  "count": 49,
  "engagements": 12
  }
  }
  ]
  },
  {
  "timestamp": "2022-09-15T11:07:08.484Z",
  "data": [
  {
  "source": "twitter",
  "data": {
  "count": 42,
  "engagements": 18
  }
  },
  {
  "source": "instagram",
  "data": {
  "count": 21,
  "engagements": 8
  }
  }
  ]
  },
  {
  "timestamp": "2022-09-16T11:07:08.484Z",
  "data": [
  {
  "source": "twitter",
  "data": {
  "count": 16,
  "engagements": 15
  }
  },
  {
  "source": "instagram",
  "data": {
  "count": 14,
  "engagements": 8
  }
  }
  ]
  },
  {
  "timestamp": "2022-09-17T11:07:08.484Z",
  "data": [
  {
  "source": "twitter",
  "data": {
  "count": 54,
  "engagements": 17
  }
  },
  {
  "source": "instagram",
  "data": {
  "count": 17,
  "engagements": 6
  }
  }
  ]
  },
  {
  "timestamp": "2022-09-18T11:07:08.484Z",
  "data": [
  {
  "source": "twitter",
  "data": {
  "count": 97,
  "engagements": 21
  }
  },
  {
  "source": "instagram",
  "data": {
  "count": 46,
  "engagements": 11
  }
  }
  ]
  },
  {
  "timestamp": "2022-09-19T11:07:08.484Z",
  "data": [
  {
  "source": "twitter",
  "data": {
  "count": 35,
  "engagements": 10
  }
  },
  {
  "source": "instagram",
  "data": {
  "count": 15,
  "engagements": 11
  }
  }
  ]
  },
  {
  "timestamp": "2022-09-20T11:07:08.484Z",
  "data": [
  {
  "source": "twitter",
  "data": {
  "count": 66,
  "engagements": 25
  }
  },
  {
  "source": "instagram",
  "data": {
  "count": 23,
  "engagements": 6
  }
  }
  ]
  },
  {
  "timestamp": "2022-09-21T11:07:08.484Z",
  "data": [
  {
  "source": "twitter",
  "data": {
  "count": 46,
  "engagements": 12
  }
  },
  {
  "source": "instagram",
  "data": {
  "count": 18,
  "engagements": 5
  }
  }
  ]
  },
  {
  "timestamp": "2022-09-22T11:07:08.484Z",
  "data": [
  {
  "source": "twitter",
  "data": {
  "count": 81,
  "engagements": 27
  }
  },
  {
  "source": "instagram",
  "data": {
  "count": 26,
  "engagements": 7
  }
  }
  ]
  },
  {
  "timestamp": "2022-09-23T11:07:08.484Z",
  "data": [
  {
  "source": "twitter",
  "data": {
  "count": 44,
  "engagements": 26
  }
  },
  {
  "source": "instagram",
  "data": {
  "count": 46,
  "engagements": 12
  }
  }
  ]
  },
  {
  "timestamp": "2022-09-24T11:07:08.484Z",
  "data": [
  {
  "source": "twitter",
  "data": {
  "count": 61,
  "engagements": 17
  }
  },
  {
  "source": "instagram",
  "data": {
  "count": 40,
  "engagements": 11
  }
  }
  ]
  },
  {
  "timestamp": "2022-09-25T11:07:08.484Z",
  "data": [
  {
  "source": "twitter",
  "data": {
  "count": 43,
  "engagements": 21
  }
  },
  {
  "source": "instagram",
  "data": {
  "count": 39,
  "engagements": 13
  }
  }
  ]
  },
  {
  "timestamp": "2022-09-26T11:07:08.484Z",
  "data": [
  {
  "source": "twitter",
  "data": {
  "count": 62,
  "engagements": 19
  }
  },
  {
  "source": "instagram",
  "data": {
  "count": 10,
  "engagements": 10
  }
  }
  ]
  },
  {
  "timestamp": "2022-09-27T11:07:08.484Z",
  "data": [
  {
  "source": "twitter",
  "data": {
  "count": 92,
  "engagements": 22
  }
  },
  {
  "source": "instagram",
  "data": {
  "count": 30,
  "engagements": 14
  }
  }
  ]
  },
  {
  "timestamp": "2022-09-28T11:07:08.484Z",
  "data": [
  {
  "source": "twitter",
  "data": {
  "count": 50,
  "engagements": 12
  }
  },
  {
  "source": "instagram",
  "data": {
  "count": 13,
  "engagements": 14
  }
  }
  ]
  },
  {
  "timestamp": "2022-09-29T11:07:08.484Z",
  "data": [
  {
  "source": "twitter",
  "data": {
  "count": 31,
  "engagements": 19
  }
  },
  {
  "source": "instagram",
  "data": {
  "count": 39,
  "engagements": 10
  }
  }
  ]
  },
  {
  "timestamp": "2022-09-30T11:07:08.484Z",
  "data": [
  {
  "source": "twitter",
  "data": {
  "count": 64,
  "engagements": 27
  }
  },
  {
  "source": "instagram",
  "data": {
  "count": 18,
  "engagements": 12
  }
  }
  ]
  },
  {
  "timestamp": "2022-10-01T11:07:08.484Z",
  "data": [
  {
  "source": "twitter",
  "data": {
  "count": 10,
  "engagements": 24
  }
  },
  {
  "source": "instagram",
  "data": {
  "count": 13,
  "engagements": 5
  }
  }
  ]
  },
  {
  "timestamp": "2022-10-02T11:07:08.484Z",
  "data": [
  {
  "source": "twitter",
  "data": {
  "count": 45,
  "engagements": 12
  }
  },
  {
  "source": "instagram",
  "data": {
  "count": 36,
  "engagements": 13
  }
  }
  ]
  },
  {
  "timestamp": "2022-10-03T11:07:08.484Z",
  "data": [
  {
  "source": "twitter",
  "data": {
  "count": 83,
  "engagements": 18
  }
  },
  {
  "source": "instagram",
  "data": {
  "count": 32,
  "engagements": 14
  }
  }
  ]
  },
  {
  "timestamp": "2022-10-04T11:07:08.484Z",
  "data": [
  {
  "source": "twitter",
  "data": {
  "count": 52,
  "engagements": 18
  }
  },
  {
  "source": "instagram",
  "data": {
  "count": 33,
  "engagements": 8
  }
  }
  ]
  },
  {
  "timestamp": "2022-10-05T11:07:08.484Z",
  "data": [
  {
  "source": "twitter",
  "data": {
  "count": 18,
  "engagements": 16
  }
  },
  {
  "source": "instagram",
  "data": {
  "count": 49,
  "engagements": 12
  }
  }
  ]
  },
  {
  "timestamp": "2022-10-06T11:07:08.484Z",
  "data": [
  {
  "source": "twitter",
  "data": {
  "count": 82,
  "engagements": 14
  }
  },
  {
  "source": "instagram",
  "data": {
  "count": 12,
  "engagements": 10
  }
  }
  ]
  },
  {
  "timestamp": "2022-10-07T11:07:08.484Z",
  "data": [
  {
  "source": "twitter",
  "data": {
  "count": 98,
  "engagements": 26
  }
  },
  {
  "source": "instagram",
  "data": {
  "count": 28,
  "engagements": 12
  }
  }
  ]
  },
  {
  "timestamp": "2022-10-08T11:07:08.484Z",
  "data": [
  {
  "source": "twitter",
  "data": {
  "count": 79,
  "engagements": 27
  }
  },
  {
  "source": "instagram",
  "data": {
  "count": 40,
  "engagements": 14
  }
  }
  ]
  },
  {
  "timestamp": "2022-10-09T11:07:08.484Z",
  "data": [
  {
  "source": "twitter",
  "data": {
  "count": 15,
  "engagements": 21
  }
  },
  {
  "source": "instagram",
  "data": {
  "count": 14,
  "engagements": 7
  }
  }
  ]
  },
  {
  "timestamp": "2022-10-10T11:07:08.484Z",
  "data": [
  {
  "source": "twitter",
  "data": {
  "count": 80,
  "engagements": 11
  }
  },
  {
  "source": "instagram",
  "data": {
  "count": 23,
  "engagements": 11
  }
  }
  ]
  },
  {
  "timestamp": "2022-10-11T11:07:08.484Z",
  "data": [
  {
  "source": "twitter",
  "data": {
  "count": 67,
  "engagements": 10
  }
  },
  {
  "source": "instagram",
  "data": {
  "count": 25,
  "engagements": 10
  }
  }
  ]
  },
  {
  "timestamp": "2022-10-12T11:07:08.484Z",
  "data": [
  {
  "source": "twitter",
  "data": {
  "count": 45,
  "engagements": 20
  }
  },
  {
  "source": "instagram",
  "data": {
  "count": 37,
  "engagements": 14
  }
  }
  ]
  },
  {
  "timestamp": "2022-10-13T11:07:08.484Z",
  "data": [
  {
  "source": "twitter",
  "data": {
  "count": 86,
  "engagements": 15
  }
  },
  {
  "source": "instagram",
  "data": {
  "count": 24,
  "engagements": 10
  }
  }
  ]
  },
  {
  "timestamp": "2022-10-14T11:07:08.484Z",
  "data": [
  {
  "source": "twitter",
  "data": {
  "count": 56,
  "engagements": 23
  }
  },
  {
  "source": "instagram",
  "data": {
  "count": 23,
  "engagements": 7
  }
  }
  ]
  },
  {
  "timestamp": "2022-10-15T11:07:08.484Z",
  "data": [
  {
  "source": "twitter",
  "data": {
  "count": 33,
  "engagements": 23
  }
  },
  {
  "source": "instagram",
  "data": {
  "count": 42,
  "engagements": 6
  }
  }
  ]
  },
  {
  "timestamp": "2022-10-16T11:07:08.484Z",
  "data": [
  {
  "source": "twitter",
  "data": {
  "count": 51,
  "engagements": 26
  }
  },
  {
  "source": "instagram",
  "data": {
  "count": 38,
  "engagements": 5
  }
  }
  ]
  },
  {
  "timestamp": "2022-10-17T11:07:08.484Z",
  "data": [
  {
  "source": "twitter",
  "data": {
  "count": 65,
  "engagements": 28
  }
  },
  {
  "source": "instagram",
  "data": {
  "count": 25,
  "engagements": 11
  }
  }
  ]
  },
  {
  "timestamp": "2022-10-18T11:07:08.484Z",
  "data": [
  {
  "source": "twitter",
  "data": {
  "count": 43,
  "engagements": 28
  }
  },
  {
  "source": "instagram",
  "data": {
  "count": 36,
  "engagements": 13
  }
  }
  ]
  },
  {
  "timestamp": "2022-10-19T11:07:08.484Z",
  "data": [
  {
  "source": "twitter",
  "data": {
  "count": 78,
  "engagements": 24
  }
  },
  {
  "source": "instagram",
  "data": {
  "count": 21,
  "engagements": 5
  }
  }
  ]
  },
  {
  "timestamp": "2022-10-20T11:07:08.484Z",
  "data": [
  {
  "source": "twitter",
  "data": {
  "count": 26,
  "engagements": 22
  }
  },
  {
  "source": "instagram",
  "data": {
  "count": 40,
  "engagements": 9
  }
  }
  ]
  },
  {
  "timestamp": "2022-10-21T11:07:08.484Z",
  "data": [
  {
  "source": "twitter",
  "data": {
  "count": 27,
  "engagements": 13
  }
  },
  {
  "source": "instagram",
  "data": {
  "count": 11,
  "engagements": 14
  }
  }
  ]
  },
  {
  "timestamp": "2022-10-22T11:07:08.484Z",
  "data": [
  {
  "source": "twitter",
  "data": {
  "count": 65,
  "engagements": 14
  }
  },
  {
  "source": "instagram",
  "data": {
  "count": 22,
  "engagements": 10
  }
  }
  ]
  },
  {
  "timestamp": "2022-10-23T11:07:08.484Z",
  "data": [
  {
  "source": "twitter",
  "data": {
  "count": 62,
  "engagements": 24
  }
  },
  {
  "source": "instagram",
  "data": {
  "count": 40,
  "engagements": 9
  }
  }
  ]
  },
  {
  "timestamp": "2022-10-24T11:07:08.484Z",
  "data": [
  {
  "source": "twitter",
  "data": {
  "count": 73,
  "engagements": 16
  }
  },
  {
  "source": "instagram",
  "data": {
  "count": 28,
  "engagements": 10
  }
  }
  ]
  },
  {
  "timestamp": "2022-10-25T11:07:08.484Z",
  "data": [
  {
  "source": "twitter",
  "data": {
  "count": 62,
  "engagements": 22
  }
  },
  {
  "source": "instagram",
  "data": {
  "count": 38,
  "engagements": 7
  }
  }
  ]
  },
  {
  "timestamp": "2022-10-26T11:07:08.484Z",
  "data": [
  {
  "source": "twitter",
  "data": {
  "count": 66,
  "engagements": 24
  }
  },
  {
  "source": "instagram",
  "data": {
  "count": 12,
  "engagements": 7
  }
  }
  ]
  },
  {
  "timestamp": "2022-10-27T11:07:08.484Z",
  "data": [
  {
  "source": "twitter",
  "data": {
  "count": 90,
  "engagements": 19
  }
  },
  {
  "source": "instagram",
  "data": {
  "count": 48,
  "engagements": 7
  }
  }
  ]
  },
  {
  "timestamp": "2022-10-28T11:07:08.484Z",
  "data": [
  {
  "source": "twitter",
  "data": {
  "count": 27,
  "engagements": 12
  }
  },
  {
  "source": "instagram",
  "data": {
  "count": 35,
  "engagements": 8
  }
  }
  ]
  },
  {
  "timestamp": "2022-10-29T11:07:08.484Z",
  "data": [
  {
  "source": "twitter",
  "data": {
  "count": 30,
  "engagements": 14
  }
  },
  {
  "source": "instagram",
  "data": {
  "count": 28,
  "engagements": 7
  }
  }
  ]
  },
  {
  "timestamp": "2022-10-30T11:07:08.484Z",
  "data": [
  {
  "source": "twitter",
  "data": {
  "count": 53,
  "engagements": 18
  }
  },
  {
  "source": "instagram",
  "data": {
  "count": 17,
  "engagements": 12
  }
  }
  ]
  },
  {
  "timestamp": "2022-10-31T11:07:08.484Z",
  "data": [
  {
  "source": "twitter",
  "data": {
  "count": 32,
  "engagements": 25
  }
  },
  {
  "source": "instagram",
  "data": {
  "count": 38,
  "engagements": 12
  }
  }
  ]
  },
  {
  "timestamp": "2022-11-01T11:07:08.484Z",
  "data": [
  {
  "source": "twitter",
  "data": {
  "count": 45,
  "engagements": 22
  }
  },
  {
  "source": "instagram",
  "data": {
  "count": 18,
  "engagements": 11
  }
  }
  ]
  },
  {
  "timestamp": "2022-11-02T11:07:08.484Z",
  "data": [
  {
  "source": "twitter",
  "data": {
  "count": 40,
  "engagements": 11
  }
  },
  {
  "source": "instagram",
  "data": {
  "count": 10,
  "engagements": 9
  }
  }
  ]
  },
  {
  "timestamp": "2022-11-03T11:07:08.484Z",
  "data": [
  {
  "source": "twitter",
  "data": {
  "count": 88,
  "engagements": 19
  }
  },
  {
  "source": "instagram",
  "data": {
  "count": 20,
  "engagements": 13
  }
  }
  ]
  },
  {
  "timestamp": "2022-11-04T11:07:08.484Z",
  "data": [
  {
  "source": "twitter",
  "data": {
  "count": 75,
  "engagements": 24
  }
  },
  {
  "source": "instagram",
  "data": {
  "count": 49,
  "engagements": 8
  }
  }
  ]
  },
  {
  "timestamp": "2022-11-05T11:07:08.484Z",
  "data": [
  {
  "source": "twitter",
  "data": {
  "count": 27,
  "engagements": 20
  }
  },
  {
  "source": "instagram",
  "data": {
  "count": 26,
  "engagements": 10
  }
  }
  ]
  },
  {
  "timestamp": "2022-11-06T11:07:08.484Z",
  "data": [
  {
  "source": "twitter",
  "data": {
  "count": 65,
  "engagements": 24
  }
  },
  {
  "source": "instagram",
  "data": {
  "count": 43,
  "engagements": 5
  }
  }
  ]
  },
  {
  "timestamp": "2022-11-07T11:07:08.484Z",
  "data": [
  {
  "source": "twitter",
  "data": {
  "count": 65,
  "engagements": 25
  }
  },
  {
  "source": "instagram",
  "data": {
  "count": 25,
  "engagements": 12
  }
  }
  ]
  },
  {
  "timestamp": "2022-11-08T11:07:08.484Z",
  "data": [
  {
  "source": "twitter",
  "data": {
  "count": 35,
  "engagements": 29
  }
  },
  {
  "source": "instagram",
  "data": {
  "count": 21,
  "engagements": 10
  }
  }
  ]
  },
  {
  "timestamp": "2022-11-09T11:07:08.484Z",
  "data": [
  {
  "source": "twitter",
  "data": {
  "count": 36,
  "engagements": 12
  }
  },
  {
  "source": "instagram",
  "data": {
  "count": 32,
  "engagements": 14
  }
  }
  ]
  },
  {
  "timestamp": "2022-11-10T11:07:08.484Z",
  "data": [
  {
  "source": "twitter",
  "data": {
  "count": 99,
  "engagements": 12
  }
  },
  {
  "source": "instagram",
  "data": {
  "count": 44,
  "engagements": 8
  }
  }
  ]
  },
  {
  "timestamp": "2022-11-11T11:07:08.484Z",
  "data": [
  {
  "source": "twitter",
  "data": {
  "count": 42,
  "engagements": 21
  }
  },
  {
  "source": "instagram",
  "data": {
  "count": 18,
  "engagements": 7
  }
  }
  ]
  },
  {
  "timestamp": "2022-11-12T11:07:08.484Z",
  "data": [
  {
  "source": "twitter",
  "data": {
  "count": 67,
  "engagements": 28
  }
  },
  {
  "source": "instagram",
  "data": {
  "count": 25,
  "engagements": 10
  }
  }
  ]
  },
  {
  "timestamp": "2022-11-13T11:07:08.484Z",
  "data": [
  {
  "source": "twitter",
  "data": {
  "count": 69,
  "engagements": 21
  }
  },
  {
  "source": "instagram",
  "data": {
  "count": 24,
  "engagements": 11
  }
  }
  ]
  },
  {
  "timestamp": "2022-11-14T11:07:08.484Z",
  "data": [
  {
  "source": "twitter",
  "data": {
  "count": 95,
  "engagements": 14
  }
  },
  {
  "source": "instagram",
  "data": {
  "count": 30,
  "engagements": 13
  }
  }
  ]
  },
  {
  "timestamp": "2022-11-15T11:07:08.484Z",
  "data": [
  {
  "source": "twitter",
  "data": {
  "count": 92,
  "engagements": 26
  }
  },
  {
  "source": "instagram",
  "data": {
  "count": 22,
  "engagements": 14
  }
  }
  ]
  },
  {
  "timestamp": "2022-11-16T11:07:08.484Z",
  "data": [
  {
  "source": "twitter",
  "data": {
  "count": 66,
  "engagements": 23
  }
  },
  {
  "source": "instagram",
  "data": {
  "count": 23,
  "engagements": 7
  }
  }
  ]
  },
  {
  "timestamp": "2022-11-17T11:07:08.484Z",
  "data": [
  {
  "source": "twitter",
  "data": {
  "count": 18,
  "engagements": 25
  }
  },
  {
  "source": "instagram",
  "data": {
  "count": 30,
  "engagements": 11
  }
  }
  ]
  },
  {
  "timestamp": "2022-11-18T11:07:08.484Z",
  "data": [
  {
  "source": "twitter",
  "data": {
  "count": 59,
  "engagements": 29
  }
  },
  {
  "source": "instagram",
  "data": {
  "count": 34,
  "engagements": 13
  }
  }
  ]
  },
  {
  "timestamp": "2022-11-19T11:07:08.484Z",
  "data": [
  {
  "source": "twitter",
  "data": {
  "count": 58,
  "engagements": 18
  }
  },
  {
  "source": "instagram",
  "data": {
  "count": 37,
  "engagements": 7
  }
  }
  ]
  },
  {
  "timestamp": "2022-11-20T11:07:08.484Z",
  "data": [
  {
  "source": "twitter",
  "data": {
  "count": 74,
  "engagements": 13
  }
  },
  {
  "source": "instagram",
  "data": {
  "count": 18,
  "engagements": 12
  }
  }
  ]
  },
  {
  "timestamp": "2022-11-21T11:07:08.484Z",
  "data": [
  {
  "source": "twitter",
  "data": {
  "count": 25,
  "engagements": 14
  }
  },
  {
  "source": "instagram",
  "data": {
  "count": 11,
  "engagements": 7
  }
  }
  ]
  },
  {
  "timestamp": "2022-11-22T11:07:08.484Z",
  "data": [
  {
  "source": "twitter",
  "data": {
  "count": 93,
  "engagements": 27
  }
  },
  {
  "source": "instagram",
  "data": {
  "count": 11,
  "engagements": 6
  }
  }
  ]
  },
  {
  "timestamp": "2022-11-23T11:07:08.484Z",
  "data": [
  {
  "source": "twitter",
  "data": {
  "count": 98,
  "engagements": 13
  }
  },
  {
  "source": "instagram",
  "data": {
  "count": 35,
  "engagements": 8
  }
  }
  ]
  },
  {
  "timestamp": "2022-11-24T11:07:08.484Z",
  "data": [
  {
  "source": "twitter",
  "data": {
  "count": 13,
  "engagements": 20
  }
  },
  {
  "source": "instagram",
  "data": {
  "count": 36,
  "engagements": 5
  }
  }
  ]
  },
  {
  "timestamp": "2022-11-25T11:07:08.484Z",
  "data": [
  {
  "source": "twitter",
  "data": {
  "count": 61,
  "engagements": 28
  }
  },
  {
  "source": "instagram",
  "data": {
  "count": 30,
  "engagements": 11
  }
  }
  ]
  },
  {
  "timestamp": "2022-11-26T11:07:08.484Z",
  "data": [
  {
  "source": "twitter",
  "data": {
  "count": 15,
  "engagements": 15
  }
  },
  {
  "source": "instagram",
  "data": {
  "count": 44,
  "engagements": 10
  }
  }
  ]
  },
  {
  "timestamp": "2022-11-27T11:07:08.484Z",
  "data": [
  {
  "source": "twitter",
  "data": {
  "count": 41,
  "engagements": 23
  }
  },
  {
  "source": "instagram",
  "data": {
  "count": 44,
  "engagements": 7
  }
  }
  ]
  },
  {
  "timestamp": "2022-11-28T11:07:08.484Z",
  "data": [
  {
  "source": "twitter",
  "data": {
  "count": 90,
  "engagements": 26
  }
  },
  {
  "source": "instagram",
  "data": {
  "count": 45,
  "engagements": 13
  }
  }
  ]
  },
  {
  "timestamp": "2022-11-29T11:07:08.484Z",
  "data": [
  {
  "source": "twitter",
  "data": {
  "count": 42,
  "engagements": 14
  }
  },
  {
  "source": "instagram",
  "data": {
  "count": 35,
  "engagements": 5
  }
  }
  ]
  },
  {
  "timestamp": "2022-11-30T11:07:08.484Z",
  "data": [
  {
  "source": "twitter",
  "data": {
  "count": 93,
  "engagements": 11
  }
  },
  {
  "source": "instagram",
  "data": {
  "count": 29,
  "engagements": 10
  }
  }
  ]
  },
  {
  "timestamp": "2022-12-01T11:07:08.484Z",
  "data": [
  {
  "source": "twitter",
  "data": {
  "count": 49,
  "engagements": 16
  }
  },
  {
  "source": "instagram",
  "data": {
  "count": 18,
  "engagements": 14
  }
  }
  ]
  },
  {
  "timestamp": "2022-12-02T11:07:08.484Z",
  "data": [
  {
  "source": "twitter",
  "data": {
  "count": 85,
  "engagements": 19
  }
  },
  {
  "source": "instagram",
  "data": {
  "count": 49,
  "engagements": 5
  }
  }
  ]
  },
  {
  "timestamp": "2022-12-03T11:07:08.484Z",
  "data": [
  {
  "source": "twitter",
  "data": {
  "count": 29,
  "engagements": 29
  }
  },
  {
  "source": "instagram",
  "data": {
  "count": 36,
  "engagements": 12
  }
  }
  ]
  },
  {
  "timestamp": "2022-12-04T11:07:08.484Z",
  "data": [
  {
  "source": "twitter",
  "data": {
  "count": 66,
  "engagements": 29
  }
  },
  {
  "source": "instagram",
  "data": {
  "count": 13,
  "engagements": 7
  }
  }
  ]
  },
  {
  "timestamp": "2022-12-05T11:07:08.484Z",
  "data": [
  {
  "source": "twitter",
  "data": {
  "count": 68,
  "engagements": 29
  }
  },
  {
  "source": "instagram",
  "data": {
  "count": 30,
  "engagements": 8
  }
  }
  ]
  },
  {
  "timestamp": "2022-12-06T11:07:08.484Z",
  "data": [
  {
  "source": "twitter",
  "data": {
  "count": 49,
  "engagements": 28
  }
  },
  {
  "source": "instagram",
  "data": {
  "count": 21,
  "engagements": 12
  }
  }
  ]
  },
  {
  "timestamp": "2022-12-07T11:07:08.484Z",
  "data": [
  {
  "source": "twitter",
  "data": {
  "count": 90,
  "engagements": 18
  }
  },
  {
  "source": "instagram",
  "data": {
  "count": 44,
  "engagements": 6
  }
  }
  ]
  },
  {
  "timestamp": "2022-12-08T11:07:08.484Z",
  "data": [
  {
  "source": "twitter",
  "data": {
  "count": 11,
  "engagements": 15
  }
  },
  {
  "source": "instagram",
  "data": {
  "count": 24,
  "engagements": 6
  }
  }
  ]
  },
  {
  "timestamp": "2022-12-09T11:07:08.484Z",
  "data": [
  {
  "source": "twitter",
  "data": {
  "count": 59,
  "engagements": 27
  }
  },
  {
  "source": "instagram",
  "data": {
  "count": 14,
  "engagements": 5
  }
  }
  ]
  },
  {
  "timestamp": "2022-12-10T11:07:08.484Z",
  "data": [
  {
  "source": "twitter",
  "data": {
  "count": 85,
  "engagements": 18
  }
  },
  {
  "source": "instagram",
  "data": {
  "count": 17,
  "engagements": 6
  }
  }
  ]
  },
  {
  "timestamp": "2022-12-11T11:07:08.484Z",
  "data": [
  {
  "source": "twitter",
  "data": {
  "count": 90,
  "engagements": 21
  }
  },
  {
  "source": "instagram",
  "data": {
  "count": 22,
  "engagements": 14
  }
  }
  ]
  },
  {
  "timestamp": "2022-12-12T11:07:08.484Z",
  "data": [
  {
  "source": "twitter",
  "data": {
  "count": 63,
  "engagements": 14
  }
  },
  {
  "source": "instagram",
  "data": {
  "count": 30,
  "engagements": 7
  }
  }
  ]
  },
  {
  "timestamp": "2022-12-13T11:07:08.484Z",
  "data": [
  {
  "source": "twitter",
  "data": {
  "count": 76,
  "engagements": 17
  }
  },
  {
  "source": "instagram",
  "data": {
  "count": 48,
  "engagements": 5
  }
  }
  ]
  },
  {
  "timestamp": "2022-12-14T11:07:08.484Z",
  "data": [
  {
  "source": "twitter",
  "data": {
  "count": 15,
  "engagements": 23
  }
  },
  {
  "source": "instagram",
  "data": {
  "count": 36,
  "engagements": 12
  }
  }
  ]
  },
  {
  "timestamp": "2022-12-15T11:07:08.484Z",
  "data": [
  {
  "source": "twitter",
  "data": {
  "count": 77,
  "engagements": 10
  }
  },
  {
  "source": "instagram",
  "data": {
  "count": 24,
  "engagements": 10
  }
  }
  ]
  },
  {
  "timestamp": "2022-12-16T11:07:08.484Z",
  "data": [
  {
  "source": "twitter",
  "data": {
  "count": 43,
  "engagements": 15
  }
  },
  {
  "source": "instagram",
  "data": {
  "count": 43,
  "engagements": 6
  }
  }
  ]
  }
  ]

const twittercount=[]
  const twittercumcount=[]
  const twittereng=[]
  const twittercumeng=[]
  const instagramcount=[]
  const instagramcumcount=[]
  const instagrameng=[]
  const instagramcumeng=[]
let tottwitcount=0
let tottwiteng=0
let totinstacount=0
let totinstaeng=0


  for(let i=0;i<arr.length;i++){
     const times=Date.parse(arr[i].timestamp);
     const d=times
     const twitcount=arr[i].data[0].data.count
     const twiteng=arr[i].data[0].data.engagements
     const instacount=arr[i].data[1].data.count
     const instaeng=arr[i].data[1].data.engagements
     twittercount.push([d,twitcount])
     tottwitcount+=twitcount
     twittercumcount.push([d,tottwitcount])
     twittereng.push([d,twiteng])
     tottwiteng+=twiteng
     twittercumeng.push([d,tottwiteng])

     instagramcount.push([d,instacount])
     totinstacount+=instacount
     instagramcumcount.push([d,totinstacount])
     instagrameng.push([d,instaeng])
     totinstaeng+=instaeng
     instagramcumeng.push([d,totinstaeng])


  }

 
const noncumfortwit = {
  chart: {
   
    type: 'line'
  },
  title: {
    text: 'Non cummulative graph for twitter'
  },
  credits: {
    enabled: false
  },
  xAxis: {
    type: 'datetime',
    labels: {
      format: '{value:%e-%b-%y}'
    },
},

  tooltip: {
    shared: false,
    useHTML: true,
    headerFormat: '<table><tr><th colspan="2">{point.key}</th></tr>',
    pointFormat: '<tr><td style="color: {series.color}">{series.name} </td>' +
        '<td style="text-align: right"><b>{point.y} </b></td></tr>',
    footerFormat: '</table>',

},

  series: [{
     name:'counts',
      data: twittercount,
      color: '#6f2da8',
      
      pointIntervalUnit: 'month'
     

  },
  {
    name:'engagements',
    data:twittereng
  }
]
}
const cumfortwit = {
  title: {
    text: 'cummulative graph for twitter'
  },
  credits: {
    enabled: true
  },
  series: [{
     name:'counts',
      data: twittercumcount,

  },
  {
    name:'engagements',
    data:twittercumeng
  }
]
}
const noncumforinsta= {
  title: {
    text: 'Non cummulative graph for instagrame'
  },
  series: [{
    name:'counts',
      data: instagramcount
  },{
    name:'engagements',
    data:instagrameng
  }
]
}
const cumforinsta= {
  title: {
    text: ' cummulative graph for instagram'
  },
  series: [{
    name:'counts',
      data: instagramcumcount
  },{
    name:'engagements',
    data:instagramcumeng
  }
]
}




function Donut(props){




  if(props.st==='twitter' && props.type==='noncum'){
  
    return(
      
      <div>
        
         <HighchartsReact 
    highcharts={Highcharts} 
    options={noncumfortwit} 
  />
      </div>
    )
  }
   else if(props.st==='twitter' && props.type==='cum'){
    return(
    
      <div>
      <HighchartsReact 
 highcharts={Highcharts} 
 options={cumfortwit} 
/>
   </div>
    
    )
  }
   else if(props.st==='instagram' && props.type==='noncum'){
    return(
      <div>
      <HighchartsReact 
 highcharts={Highcharts} 
 options={noncumforinsta} 
/>
   </div>
    )
  }
  else{
    return(
      <div>
      <HighchartsReact 
 highcharts={Highcharts} 
 options={cumforinsta} 
/>
   </div>
    )
  }
}






export default Donut;