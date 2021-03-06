'use strict';

/**
 * @ngdoc function
 * @name easyJobSearchApp.controller:MainCtrl
 * @description
 *  MainCtrl
 * Controller of the easyJobSearchApp
 */
angular.module('easyJobSearchApp')
  .controller('TeacherCtrl', ['$location','$anchorScroll',function ($location,$anchorScroll) {
    var vm = this;
    vm.state = [
      {
        name: 'Andaman Nicobar',
        link: 'andmannicobar'
      },
      {
        name: 'Andhra Pradesh',
        link: 'andhrapradesh'
      }, {
        name: 'Arunachal Pradesh',
        link: 'arunachalpradesh'
      },
      {
        name: 'Assam',
        link: 'assam'
      },
      {
        name: 'Bangalore',
        link: 'bangalore'
      }, {
        name: 'Bihar',
        link: 'bihar'
      },
      {
        name: 'Chandigarh',
        link: 'chandigarh'
      },
      {
        name: 'Chennai',
        link: 'chennai'
      },
      {
        name: 'Chhattisgarh',
        link: 'chhattisgarh'
      }, {
        name: 'Daman & Diu',
        link: 'daman&diu'
      },
      {
        name: 'Delhi NCR',
        link: 'delhincr'
      },
      {
        name: 'Goa',
        link: 'goa'
      }, {
        name: 'Gujarat',
        link: 'gujarat'
      },
      {
        name: 'Haryana',
        link: 'haryana'
      },
      {
        name: 'Himachal Pradesh',
        link: 'himachalpradesh'
      },
      {
        name: 'Hyderabad',
        link: 'hyderabad'
      }, {
        name: 'Jammu Kashmir',
        link: 'jammukashmir'
      },
      {
        name: 'Jharkhand',
        link: 'jharkhand'
      },
      {
        name: 'Karnataka',
        link: 'karnataka'
      },
      {
        name: 'Kerala',
        link: 'kerala'
      }, {
        name: 'Kolkata',
        link: 'Kolkata'
      },
      {
        name: 'Lakshadweep',
        link: 'lakshadweep'
      },
      {
        name: 'Maharashtra',
        link: 'maharashtra'
      },
      {
        name: 'Manipur',
        link: 'manipur'
      }, {
        name: 'Meghalaya',
        link: 'meghalaya'
      },
      {
        name: 'Mizoram',
        link: 'mizoram'
      },
      {
        name: 'Mumbai',
        link: 'mumbai'
      },
      {
        name: 'Nagaland',
        link: 'nagaland'
      }, {
        name: 'Odisha',
        link: 'odisha'
      },
      {
        name: 'Puducherry',
        link: 'puducherry'
      },
      {
        name: 'Pune',
        link: 'pune'
      },
      {
        name: 'Punjab',
        link: 'punjab'
      }, {
        name: 'Rajasthan',
        link: 'rajasthan'
      },
      {
        name: 'Sikkim',
        link: 'sikkim'
      },
      {
        name: 'Tamil Nadu',
        link: 'tamilnadu'
      }, {
        name: 'Telangana',
        link: 'telangana'
      },
      {
        name: 'Tripura',
        link: 'tripura'
      },
      {
        name: 'Uttar Pradesh',
        link: 'uttarpradesh'
      },
      {
        name: 'Uttarakhand',
        link: 'uttarakhand'
      }, {
        name: 'West Bengal',
        link: 'westbengal'
      },
    ];

    vm.scrollTo = function (id) {
      $location.hash(id);
      $anchorScroll();
    };


    vm.jobs = [
      {
        title: 'All teaching jobs',
        link: 'all',
        header: [
          'Post Date', 'Bank Name', 'Post Name', 'Qualification', 'Last Date', 'More information'
        ],
        data: [
          {
            postDate: '28/03/2018',
            bankName: 'Exim bank',
            postName: 'Information Technology Officer, Legal Officer – 8 Posts',
            qualification: 'Any Degree, PG (Relevant Discipline)',
            lastDate: '24-12-2018',
            moreInfo: 'Apply'
          },
          {
            postDate: '28/03/2018',
            bankName: 'Exim bank',
            postName: 'Information Technology Officer, Legal Officer – 8 Posts',
            qualification: 'Any Degree, PG (Relevant Discipline)',
            lastDate: '24-12-2018',
            moreInfo: 'Apply'
          },
          {
            postDate: '28/03/2018',
            bankName: 'Exim bank',
            postName: 'Information Technology Officer, Legal Officer – 8 Posts',
            qualification: 'Any Degree, PG (Relevant Discipline)',
            lastDate: '24-12-2018',
            moreInfo: 'Apply'
          }
        ],
      },
      {
        title: 'Maharashtra teaching jobs',
        link: 'maharashtra',
        header: [
          'Post Date', 'Bank Name', 'Post Name', 'Qualification', 'Last Date', 'More information'
        ],
        data: [
          {
            postDate: '28/03/2018',
            bankName: 'Exim bank',
            postName: 'Information Technology Officer, Legal Officer – 8 Posts',
            qualification: 'Any Degree, PG (Relevant Discipline)',
            lastDate: '24-12-2018',
            moreInfo: 'Apply'
          },
          {
            postDate: '28/03/2018',
            bankName: 'Exim bank',
            postName: 'Information Technology Officer, Legal Officer – 8 Posts',
            qualification: 'Any Degree, PG (Relevant Discipline)',
            lastDate: '24-12-2018',
            moreInfo: 'Apply'
          },
          {
            postDate: '28/03/2018',
            bankName: 'Exim bank',
            postName: 'Information Technology Officer, Legal Officer – 8 Posts',
            qualification: 'Any Degree, PG (Relevant Discipline)',
            lastDate: '24-12-2018',
            moreInfo: 'Apply'
          }
        ],
      }, {
        title: 'Adaman nicobar teaching jobs',
        link: 'andmannicobar',
        header: [
          'Post Date', 'Bank Name', 'Post Name', 'Qualification', 'Last Date', 'More information'
        ],
        data: [
          {
            postDate: '28/03/2018',
            bankName: 'Exim bank',
            postName: 'Information Technology Officer, Legal Officer – 8 Posts',
            qualification: 'Any Degree, PG (Relevant Discipline)',
            lastDate: '24-12-2018',
            moreInfo: 'Apply'
          },
          {
            postDate: '28/03/2018',
            bankName: 'Exim bank',
            postName: 'Information Technology Officer, Legal Officer – 8 Posts',
            qualification: 'Any Degree, PG (Relevant Discipline)',
            lastDate: '24-12-2018',
            moreInfo: 'Apply'
          },
          {
            postDate: '28/03/2018',
            bankName: 'Exim bank',
            postName: 'Information Technology Officer, Legal Officer – 8 Posts',
            qualification: 'Any Degree, PG (Relevant Discipline)',
            lastDate: '24-12-2018',
            moreInfo: 'Apply'
          },
          {
            postDate: '28/03/2018',
            bankName: 'Exim bank',
            postName: 'Information Technology Officer, Legal Officer – 8 Posts',
            qualification: 'Any Degree, PG (Relevant Discipline)',
            lastDate: '24-12-2018',
            moreInfo: 'Apply'
          }
        ],
      },
      {
        title: 'Goa teaching jobs',
        link: 'goa',
        header: [
          'Post Date', 'Bank Name', 'Post Name', 'Qualification', 'Last Date', 'More information'
        ],
        data: [
          {
            postDate: '28/03/2018',
            bankName: 'Exim bank',
            postName: 'Information Technology Officer, Legal Officer – 8 Posts',
            qualification: 'Any Degree, PG (Relevant Discipline)',
            lastDate: '24-12-2018',
            moreInfo: 'Apply'
          },
          {
            postDate: '28/03/2018',
            bankName: 'Exim bank',
            postName: 'Information Technology Officer, Legal Officer – 8 Posts',
            qualification: 'Any Degree, PG (Relevant Discipline)',
            lastDate: '24-12-2018',
            moreInfo: 'Apply'
          },
          {
            postDate: '28/03/2018',
            bankName: 'Exim bank',
            postName: 'Information Technology Officer, Legal Officer – 8 Posts',
            qualification: 'Any Degree, PG (Relevant Discipline)',
            lastDate: '24-12-2018',
            moreInfo: 'Apply'
          },
          {
            postDate: '28/03/2018',
            bankName: 'Exim bank',
            postName: 'Information Technology Officer, Legal Officer – 8 Posts',
            qualification: 'Any Degree, PG (Relevant Discipline)',
            lastDate: '24-12-2018',
            moreInfo: 'Apply'
          }
        ],
      }
    ];

  }]  );
