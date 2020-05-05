export default class MockService {
  static MOCK_DATA = {
    lat: 38,
    lon: -84.39,
    timezone: "America/New_York",
    current: {
      dt: 1588681654,
      sunrise: 1588674978,
      sunset: 1588725123,
      temp: 49.06,
      feels_like: 41.97,
      pressure: 1009,
      humidity: 93,
      dew_point: 47.14,
      uvi: 7.22,
      clouds: 90,
      visibility: 9656,
      wind_speed: 11.41,
      wind_deg: 100,
      wind_gust: 23.04,
      weather: [
        {
          id: 501,
          main: "Rain",
          description: "moderate rain",
          icon: "10d"
        },
        {
          id: 701,
          main: "Mist",
          description: "mist",
          icon: "50d"
        }
      ],
      rain: {
        '1h': 3.56
      }
    },
    hourly: [
      {
        dt: 1588680000,
        temp: 49.06,
        feels_like: 40.3,
        pressure: 1009,
        humidity: 93,
        dew_point: 47.14,
        clouds: 90,
        wind_speed: 14.41,
        wind_deg: 79,
        weather: [
          {
            id: 501,
            main: "Rain",
            description: "moderate rain",
            icon: "10d"
          }
        ],
        rain: {
          '1h': 2.25
        }
      },
      {
        dt: 1588683600,
        temp: 48.09,
        feels_like: 38.8,
        pressure: 1009,
        humidity: 90,
        dew_point: 45.3,
        clouds: 95,
        wind_speed: 14.54,
        wind_deg: 89,
        weather: [
          {
            id: 804,
            main: "Clouds",
            description: "overcast clouds",
            icon: "04d"
          }
        ]
      },
      {
        dt: 1588687200,
        temp: 48.58,
        feels_like: 39.27,
        pressure: 1009,
        humidity: 88,
        dew_point: 45.19,
        clouds: 98,
        wind_speed: 14.54,
        wind_deg: 93,
        weather: [
          {
            id: 804,
            main: "Clouds",
            description: "overcast clouds",
            icon: "04d"
          }
        ]
      },
      {
        dt: 1588690800,
        temp: 51.58,
        feels_like: 43.88,
        pressure: 1009,
        humidity: 85,
        dew_point: 47.23,
        clouds: 99,
        wind_speed: 12.55,
        wind_deg: 93,
        weather: [
          {
            id: 804,
            main: "Clouds",
            description: "overcast clouds",
            icon: "04d"
          }
        ]
      },
      {
        dt: 1588694400,
        temp: 51.87,
        feels_like: 45.79,
        pressure: 1008,
        humidity: 84,
        dew_point: 47.19,
        clouds: 100,
        wind_speed: 9.66,
        wind_deg: 75,
        weather: [
          {
            id: 804,
            main: "Clouds",
            description: "overcast clouds",
            icon: "04d"
          }
        ]
      },
      {
        dt: 1588698000,
        temp: 50.09,
        feels_like: 44.47,
        pressure: 1008,
        humidity: 87,
        dew_point: 49.26,
        clouds: 100,
        wind_speed: 8.48,
        wind_deg: 61,
        weather: [
          {
            id: 500,
            main: "Rain",
            description: "light rain",
            icon: "10d"
          }
        ],
        rain: {
          '1h': 0.47
        }
      },
      {
        dt: 1588701600,
        temp: 54.55,
        feels_like: 49.53,
        pressure: 1007,
        humidity: 84,
        dew_point: 52.52,
        clouds: 99,
        wind_speed: 8.97,
        wind_deg: 81,
        weather: [
          {
            id: 804,
            main: "Clouds",
            description: "overcast clouds",
            icon: "04d"
          }
        ]
      },
      {
        dt: 1588705200,
        temp: 55.4,
        feels_like: 52.88,
        pressure: 1007,
        humidity: 83,
        dew_point: 53.13,
        clouds: 99,
        wind_speed: 4.79,
        wind_deg: 100,
        weather: [
          {
            id: 804,
            main: "Clouds",
            description: "overcast clouds",
            icon: "04d"
          }
        ]
      },
      {
        dt: 1588708800,
        temp: 59.79,
        feels_like: 58.32,
        pressure: 1007,
        humidity: 79,
        dew_point: 55.99,
        clouds: 95,
        wind_speed: 4.43,
        wind_deg: 295,
        weather: [
          {
            id: 804,
            main: "Clouds",
            description: "overcast clouds",
            icon: "04d"
          }
        ]
      },
      {
        dt: 1588712400,
        temp: 58.42,
        feels_like: 54.05,
        pressure: 1007,
        humidity: 81,
        dew_point: 55.51,
        clouds: 96,
        wind_speed: 9.24,
        wind_deg: 332,
        weather: [
          {
            id: 804,
            main: "Clouds",
            description: "overcast clouds",
            icon: "04d"
          }
        ]
      },
      {
        dt: 1588716000,
        temp: 56.86,
        feels_like: 51.94,
        pressure: 1007,
        humidity: 82,
        dew_point: 54.01,
        clouds: 98,
        wind_speed: 9.57,
        wind_deg: 327,
        weather: [
          {
            id: 804,
            main: "Clouds",
            description: "overcast clouds",
            icon: "04d"
          }
        ]
      },
      {
        dt: 1588719600,
        temp: 56.77,
        feels_like: 50.38,
        pressure: 1008,
        humidity: 80,
        dew_point: 53.56,
        clouds: 98,
        wind_speed: 11.81,
        wind_deg: 331,
        weather: [
          {
            id: 804,
            main: "Clouds",
            description: "overcast clouds",
            icon: "04d"
          }
        ]
      },
      {
        dt: 1588723200,
        temp: 53.42,
        feels_like: 48.07,
        pressure: 1009,
        humidity: 81,
        dew_point: 50.47,
        clouds: 98,
        wind_speed: 8.59,
        wind_deg: 335,
        weather: [
          {
            id: 804,
            main: "Clouds",
            description: "overcast clouds",
            icon: "04d"
          }
        ]
      },
      {
        dt: 1588726800,
        temp: 48.43,
        feels_like: 43.2,
        pressure: 1011,
        humidity: 87,
        dew_point: 47.35,
        clouds: 100,
        wind_speed: 7.11,
        wind_deg: 323,
        weather: [
          {
            id: 804,
            main: "Clouds",
            description: "overcast clouds",
            icon: "04n"
          }
        ]
      },
      {
        dt: 1588730400,
        temp: 45.93,
        feels_like: 40.05,
        pressure: 1011,
        humidity: 87,
        dew_point: 45.1,
        clouds: 96,
        wind_speed: 7.31,
        wind_deg: 327,
        weather: [
          {
            id: 804,
            main: "Clouds",
            description: "overcast clouds",
            icon: "04n"
          }
        ]
      },
      {
        dt: 1588734000,
        temp: 43.79,
        feels_like: 37.92,
        pressure: 1012,
        humidity: 87,
        dew_point: 43.05,
        clouds: 97,
        wind_speed: 6.53,
        wind_deg: 327,
        weather: [
          {
            id: 804,
            main: "Clouds",
            description: "overcast clouds",
            icon: "04n"
          }
        ]
      },
      {
        dt: 1588737600,
        temp: 42.67,
        feels_like: 37.53,
        pressure: 1012,
        humidity: 86,
        dew_point: 41.61,
        clouds: 98,
        wind_speed: 4.79,
        wind_deg: 316,
        weather: [
          {
            id: 804,
            main: "Clouds",
            description: "overcast clouds",
            icon: "04n"
          }
        ]
      },
      {
        dt: 1588741200,
        temp: 40.37,
        feels_like: 34.72,
        pressure: 1012,
        humidity: 87,
        dew_point: 39.49,
        clouds: 82,
        wind_speed: 5.06,
        wind_deg: 303,
        weather: [
          {
            id: 803,
            main: "Clouds",
            description: "broken clouds",
            icon: "04n"
          }
        ]
      },
      {
        dt: 1588744800,
        temp: 39.47,
        feels_like: 33.4,
        pressure: 1013,
        humidity: 87,
        dew_point: 38.57,
        clouds: 73,
        wind_speed: 5.53,
        wind_deg: 295,
        weather: [
          {
            id: 803,
            main: "Clouds",
            description: "broken clouds",
            icon: "04n"
          }
        ]
      },
      {
        dt: 1588748400,
        temp: 39.9,
        feels_like: 33.64,
        pressure: 1012,
        humidity: 84,
        dew_point: 38.26,
        clouds: 55,
        wind_speed: 5.73,
        wind_deg: 304,
        weather: [
          {
            id: 803,
            main: "Clouds",
            description: "broken clouds",
            icon: "04n"
          }
        ]
      },
      {
        dt: 1588752000,
        temp: 41.85,
        feels_like: 34.84,
        pressure: 1012,
        humidity: 78,
        dew_point: 38.3,
        clouds: 78,
        wind_speed: 7.07,
        wind_deg: 322,
        weather: [
          {
            id: 803,
            main: "Clouds",
            description: "broken clouds",
            icon: "04n"
          }
        ]
      },
      {
        dt: 1588755600,
        temp: 41.58,
        feels_like: 34.47,
        pressure: 1012,
        humidity: 79,
        dew_point: 38.34,
        clouds: 85,
        wind_speed: 7.27,
        wind_deg: 331,
        weather: [
          {
            id: 500,
            main: "Rain",
            description: "light rain",
            icon: "10n"
          }
        ],
        rain: {
          '1h': 0.13
        }
      },
      {
        dt: 1588759200,
        temp: 40.84,
        feels_like: 34.32,
        pressure: 1012,
        humidity: 86,
        dew_point: 39.65,
        clouds: 88,
        wind_speed: 6.64,
        wind_deg: 335,
        weather: [
          {
            id: 500,
            main: "Rain",
            description: "light rain",
            icon: "10n"
          }
        ],
        rain: {
          '1h': 0.34
        }
      },
      {
        dt: 1588762800,
        temp: 41.2,
        feels_like: 34.75,
        pressure: 1012,
        humidity: 87,
        dew_point: 40.28,
        clouds: 91,
        wind_speed: 6.71,
        wind_deg: 332,
        weather: [
          {
            id: 804,
            main: "Clouds",
            description: "overcast clouds",
            icon: "04d"
          }
        ]
      },
      {
        dt: 1588766400,
        temp: 42.1,
        feels_like: 34.38,
        pressure: 1013,
        humidity: 86,
        dew_point: 40.98,
        clouds: 92,
        wind_speed: 9.17,
        wind_deg: 340,
        weather: [
          {
            id: 804,
            main: "Clouds",
            description: "overcast clouds",
            icon: "04d"
          }
        ]
      },
      {
        dt: 1588770000,
        temp: 42.39,
        feels_like: 33.19,
        pressure: 1014,
        humidity: 84,
        dew_point: 40.59,
        clouds: 100,
        wind_speed: 11.7,
        wind_deg: 343,
        weather: [
          {
            id: 804,
            main: "Clouds",
            description: "overcast clouds",
            icon: "04d"
          }
        ]
      },
      {
        dt: 1588773600,
        temp: 42.24,
        feels_like: 32.54,
        pressure: 1014,
        humidity: 81,
        dew_point: 39.69,
        clouds: 99,
        wind_speed: 12.24,
        wind_deg: 341,
        weather: [
          {
            id: 804,
            main: "Clouds",
            description: "overcast clouds",
            icon: "04d"
          }
        ]
      },
      {
        dt: 1588777200,
        temp: 42.44,
        feels_like: 31.66,
        pressure: 1015,
        humidity: 79,
        dew_point: 39.27,
        clouds: 99,
        wind_speed: 14.03,
        wind_deg: 340,
        weather: [
          {
            id: 804,
            main: "Clouds",
            description: "overcast clouds",
            icon: "04d"
          }
        ]
      },
      {
        dt: 1588780800,
        temp: 43.23,
        feels_like: 34.03,
        pressure: 1016,
        humidity: 75,
        dew_point: 38.64,
        clouds: 99,
        wind_speed: 11.05,
        wind_deg: 346,
        weather: [
          {
            id: 804,
            main: "Clouds",
            description: "overcast clouds",
            icon: "04d"
          }
        ]
      },
      {
        dt: 1588784400,
        temp: 50.49,
        feels_like: 39.96,
        pressure: 1016,
        humidity: 60,
        dew_point: 39.74,
        clouds: 88,
        wind_speed: 13.8,
        wind_deg: 332,
        weather: [
          {
            id: 804,
            main: "Clouds",
            description: "overcast clouds",
            icon: "04d"
          }
        ]
      },
      {
        dt: 1588788000,
        temp: 50.54,
        feels_like: 40.23,
        pressure: 1016,
        humidity: 59,
        dew_point: 39.58,
        clouds: 89,
        wind_speed: 13.31,
        wind_deg: 340,
        weather: [
          {
            id: 804,
            main: "Clouds",
            description: "overcast clouds",
            icon: "04d"
          }
        ]
      },
      {
        dt: 1588791600,
        temp: 52.48,
        feels_like: 41.72,
        pressure: 1016,
        humidity: 60,
        dew_point: 41.88,
        clouds: 100,
        wind_speed: 14.83,
        wind_deg: 335,
        weather: [
          {
            id: 500,
            main: "Rain",
            description: "light rain",
            icon: "10d"
          }
        ],
        rain: {
          '1h': 0.29
        }
      },
      {
        dt: 1588795200,
        temp: 50.92,
        feels_like: 40.57,
        pressure: 1016,
        humidity: 67,
        dew_point: 42.98,
        clouds: 100,
        wind_speed: 14.54,
        wind_deg: 330,
        weather: [
          {
            id: 500,
            main: "Rain",
            description: "light rain",
            icon: "10d"
          }
        ],
        rain: {
          '1h': 0.53
        }
      },
      {
        dt: 1588798800,
        temp: 52.32,
        feels_like: 42.04,
        pressure: 1015,
        humidity: 64,
        dew_point: 43.05,
        clouds: 100,
        wind_speed: 14.47,
        wind_deg: 329,
        weather: [
          {
            id: 500,
            main: "Rain",
            description: "light rain",
            icon: "10d"
          }
        ],
        rain: {
          '1h': 0.34
        }
      },
      {
        dt: 1588802400,
        temp: 52.75,
        feels_like: 41.23,
        pressure: 1015,
        humidity: 60,
        dew_point: 42.08,
        clouds: 78,
        wind_speed: 16.26,
        wind_deg: 332,
        weather: [
          {
            id: 803,
            main: "Clouds",
            description: "broken clouds",
            icon: "04d"
          }
        ]
      },
      {
        dt: 1588806000,
        temp: 51.21,
        feels_like: 41.9,
        pressure: 1016,
        humidity: 63,
        dew_point: 41.92,
        clouds: 71,
        wind_speed: 12.26,
        wind_deg: 322,
        weather: [
          {
            id: 803,
            main: "Clouds",
            description: "broken clouds",
            icon: "04d"
          }
        ]
      },
      {
        dt: 1588809600,
        temp: 47.28,
        feels_like: 38.12,
        pressure: 1017,
        humidity: 65,
        dew_point: 38.91,
        clouds: 60,
        wind_speed: 11.07,
        wind_deg: 317,
        weather: [
          {
            id: 803,
            main: "Clouds",
            description: "broken clouds",
            icon: "04d"
          }
        ]
      },
      {
        dt: 1588813200,
        temp: 43.52,
        feels_like: 34.59,
        pressure: 1017,
        humidity: 66,
        dew_point: 35.47,
        clouds: 0,
        wind_speed: 9.75,
        wind_deg: 319,
        weather: [
          {
            id: 800,
            main: "Clear",
            description: "clear sky",
            icon: "01n"
          }
        ]
      },
      {
        dt: 1588816800,
        temp: 41.99,
        feels_like: 33.1,
        pressure: 1018,
        humidity: 67,
        dew_point: 34.48,
        clouds: 0,
        wind_speed: 9.4,
        wind_deg: 320,
        weather: [
          {
            id: 800,
            main: "Clear",
            description: "clear sky",
            icon: "01n"
          }
        ]
      },
      {
        dt: 1588820400,
        temp: 40.75,
        feels_like: 31.91,
        pressure: 1019,
        humidity: 67,
        dew_point: 33.48,
        clouds: 0,
        wind_speed: 8.99,
        wind_deg: 321,
        weather: [
          {
            id: 800,
            main: "Clear",
            description: "clear sky",
            icon: "01n"
          }
        ]
      },
      {
        dt: 1588824000,
        temp: 39.61,
        feels_like: 30.79,
        pressure: 1019,
        humidity: 67,
        dew_point: 32.36,
        clouds: 0,
        wind_speed: 8.7,
        wind_deg: 312,
        weather: [
          {
            id: 800,
            main: "Clear",
            description: "clear sky",
            icon: "01n"
          }
        ]
      },
      {
        dt: 1588827600,
        temp: 39.13,
        feels_like: 31.03,
        pressure: 1019,
        humidity: 66,
        dew_point: 31.26,
        clouds: 0,
        wind_speed: 7.25,
        wind_deg: 318,
        weather: [
          {
            id: 800,
            main: "Clear",
            description: "clear sky",
            icon: "01n"
          }
        ]
      },
      {
        dt: 1588831200,
        temp: 38.43,
        feels_like: 30.11,
        pressure: 1019,
        humidity: 66,
        dew_point: 30.43,
        clouds: 0,
        wind_speed: 7.47,
        wind_deg: 304,
        weather: [
          {
            id: 800,
            main: "Clear",
            description: "clear sky",
            icon: "01n"
          }
        ]
      },
      {
        dt: 1588834800,
        temp: 37.18,
        feels_like: 28.63,
        pressure: 1019,
        humidity: 69,
        dew_point: 29.61,
        clouds: 0,
        wind_speed: 7.87,
        wind_deg: 302,
        weather: [
          {
            id: 800,
            main: "Clear",
            description: "clear sky",
            icon: "01n"
          }
        ]
      },
      {
        dt: 1588838400,
        temp: 36.23,
        feels_like: 27.88,
        pressure: 1019,
        humidity: 71,
        dew_point: 28.96,
        clouds: 0,
        wind_speed: 7.47,
        wind_deg: 299,
        weather: [
          {
            id: 800,
            main: "Clear",
            description: "clear sky",
            icon: "01n"
          }
        ]
      },
      {
        dt: 1588842000,
        temp: 35.56,
        feels_like: 27.19,
        pressure: 1020,
        humidity: 73,
        dew_point: 28.71,
        clouds: 0,
        wind_speed: 7.49,
        wind_deg: 297,
        weather: [
          {
            id: 800,
            main: "Clear",
            description: "clear sky",
            icon: "01n"
          }
        ]
      },
      {
        dt: 1588845600,
        temp: 34.81,
        feels_like: 26.56,
        pressure: 1020,
        humidity: 75,
        dew_point: 29.26,
        clouds: 0,
        wind_speed: 7.25,
        wind_deg: 292,
        weather: [
          {
            id: 800,
            main: "Clear",
            description: "clear sky",
            icon: "01n"
          }
        ]
      },
      {
        dt: 1588849200,
        temp: 34.77,
        feels_like: 26.98,
        pressure: 1021,
        humidity: 77,
        dew_point: 30.6,
        clouds: 0,
        wind_speed: 6.6,
        wind_deg: 288,
        weather: [
          {
            id: 800,
            main: "Clear",
            description: "clear sky",
            icon: "01d"
          }
        ]
      }
    ],
    daily: [
      {
        dt: 1588698000,
        sunrise: 1588674978,
        sunset: 1588725123,
        temp: {
          day: 53.37,
          min: 39.47,
          max: 57.83,
          night: 39.47,
          eve: 53.38,
          morn: 49.06
        },
        feels_like: {
          day: 48.13,
          night: 33.4,
          eve: 48.02,
          morn: 40.3
        },
        pressure: 1007,
        humidity: 85,
        dew_point: 48.97,
        wind_speed: 8.97,
        wind_deg: 81,
        weather: [
          {
            id: 501,
            main: "Rain",
            description: "moderate rain",
            icon: "10d"
          }
        ],
        clouds: 97,
        rain: 11.05,
        uvi: 7.22
      },
      {
        dt: 1588784400,
        sunrise: 1588761315,
        sunset: 1588811579,
        temp: {
          day: 50.54,
          min: 38.43,
          max: 52.32,
          night: 38.43,
          eve: 47.28,
          morn: 42.1
        },
        feels_like: {
          day: 40.23,
          night: 30.11,
          eve: 38.12,
          morn: 34.38
        },
        pressure: 1016,
        humidity: 59,
        dew_point: 39.58,
        wind_speed: 13.31,
        wind_deg: 340,
        weather: [
          {
            id: 500,
            main: "Rain",
            description: "light rain",
            icon: "10d"
          }
        ],
        clouds: 89,
        rain: 1.75,
        uvi: 7.35
      },
      {
        dt: 1588870800,
        sunrise: 1588847653,
        sunset: 1588898035,
        temp: {
          day: 58.89,
          min: 39.36,
          max: 59.74,
          night: 47.41,
          eve: 54.27,
          morn: 39.36
        },
        feels_like: {
          day: 50.36,
          night: 41.07,
          eve: 48.67,
          morn: 31.95
        },
        pressure: 1019,
        humidity: 51,
        dew_point: 43.38,
        wind_speed: 11.5,
        wind_deg: 260,
        weather: [
          {
            id: 800,
            main: "Clear",
            description: "clear sky",
            icon: "01d"
          }
        ],
        clouds: 0,
        uvi: 7.43
      },
      {
        dt: 1588957200,
        sunrise: 1588933993,
        sunset: 1588984491,
        temp: {
          day: 51.1,
          min: 30.52,
          max: 52.74,
          night: 30.52,
          eve: 45.72,
          morn: 46.76
        },
        feels_like: {
          day: 40.51,
          night: 20.44,
          eve: 38.35,
          morn: 38.77
        },
        pressure: 1004,
        humidity: 88,
        dew_point: 50.43,
        wind_speed: 17.87,
        wind_deg: 261,
        weather: [
          {
            id: 502,
            main: "Rain",
            description: "heavy intensity rain",
            icon: "10d"
          }
        ],
        clouds: 100,
        rain: 32.83,
        uvi: 6.65
      },
      {
        dt: 1589043600,
        sunrise: 1589020334,
        sunset: 1589070946,
        temp: {
          day: 47.93,
          min: 29.93,
          max: 49.46,
          night: 32.54,
          eve: 44.1,
          morn: 29.93
        },
        feels_like: {
          day: 36.55,
          night: 27.16,
          eve: 37.54,
          morn: 21.54
        },
        pressure: 1024,
        humidity: 46,
        dew_point: 29.43,
        wind_speed: 12.91,
        wind_deg: 303,
        weather: [
          {
            id: 800,
            main: "Clear",
            description: "clear sky",
            icon: "01d"
          }
        ],
        clouds: 0,
        uvi: 7.08
      },
      {
        dt: 1589130000,
        sunrise: 1589106676,
        sunset: 1589157401,
        temp: {
          day: 56.34,
          min: 37.09,
          max: 58.87,
          night: 42.67,
          eve: 52.99,
          morn: 37.09
        },
        feels_like: {
          day: 47.77,
          night: 34.25,
          eve: 46.71,
          morn: 29.53
        },
        pressure: 1022,
        humidity: 50,
        dew_point: 40.68,
        wind_speed: 10.58,
        wind_deg: 207,
        weather: [
          {
            id: 500,
            main: "Rain",
            description: "light rain",
            icon: "10d"
          }
        ],
        clouds: 1,
        rain: 1.52,
        uvi: 7.51
      },
      {
        dt: 1589216400,
        sunrise: 1589193020,
        sunset: 1589243856,
        temp: {
          day: 51.21,
          min: 32.95,
          max: 52.2,
          night: 32.95,
          eve: 47.03,
          morn: 38.68
        },
        feels_like: {
          day: 39.02,
          night: 26.37,
          eve: 39.63,
          morn: 26.49
        },
        pressure: 1021,
        humidity: 56,
        dew_point: 38.95,
        wind_speed: 16.42,
        wind_deg: 297,
        weather: [
          {
            id: 803,
            main: "Clouds",
            description: "broken clouds",
            icon: "04d"
          }
        ],
        clouds: 76,
        uvi: 8.51
      },
      {
        dt: 1589302800,
        sunrise: 1589279366,
        sunset: 1589330310,
        temp: {
          day: 50.97,
          min: 37.11,
          max: 51.28,
          night: 45.75,
          eve: 45.75,
          morn: 37.11
        },
        feels_like: {
          day: 45.09,
          night: 39.56,
          eve: 39.56,
          morn: 29.88
        },
        pressure: 1024,
        humidity: 53,
        dew_point: 36.95,
        wind_speed: 4.76,
        wind_deg: 266,
        weather: [
          {
            id: 500,
            main: "Rain",
            description: "light rain",
            icon: "10d"
          }
        ],
        clouds: 91,
        rain: 0.51,
        uvi: 8.7
      }
    ]
  };

  static OLD_MOCK_DATA = {
    "coord": {
      "lon": -122.08,
      "lat": 37.39
    },
    "weather": [
      {
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01d"
      }
    ],
    "base": "stations",
    "main": {
      "temp": 70.11,
      "feels_like": 281.86,
      "temp_min": 280.37,
      "temp_max": 284.26,
      "pressure": 1023,
      "humidity": 100
    },
    "visibility": 16093,
    "wind": {
      "speed": 1.5,
      "deg": 350
    },
    "clouds": {
      "all": 1
    },
    "dt": 1560350645,
    "sys": {
      "type": 1,
      "id": 5122,
      "message": 0.0139,
      "country": "US",
      "sunrise": 1560343627,
      "sunset": 1560396563
    },
    "timezone": -25200,
    "id": 420006353,
    "name": "Mountain View",
    "cod": 200
  };
}
