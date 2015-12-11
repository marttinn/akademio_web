export default function() {
  this.get('/courses', function() {
    return {
      data: [{
        type: "course",
        id: 1,
        attributes: {
          title: "MATH COURSE",
        }
      },
      {
        type: "course",
        id: 2,
        attributes: {
          title: "SUSHI TIME",
        }
      },     
      {
        type: "course",
        id: 3,
        attributes: {
          title: "STAR WARS EMPIRE",
        }
      },
      {
        type: "course",
        id: 4,
        attributes: {
          title: "IS EBOLA A REAL THING?",
        }
      },
      {
        type: "course",
        id: 5,
        attributes: {
          title: "HOW TO BUILD A HOUSE",
        }
      },     
      {
        type: "course",
        id: 6,
        attributes: {
          title: "HOW TO BECOME HEALTHY",
        }
      }


      ]
    };
  });
}