﻿using System.Threading.Tasks;
using TGC.CMS.Models.TokenAuth;
using TGC.CMS.Web.Controllers;
using Shouldly;
using Xunit;

namespace TGC.CMS.Web.Tests.Controllers
{
    public class HomeController_Tests: CMSWebTestBase
    {
        [Fact]
        public async Task Index_Test()
        {
            await AuthenticateAsync(null, new AuthenticateModel
            {
                UserNameOrEmailAddress = "admin",
                Password = "123qwe"
            });

            //Act
            var response = await GetResponseAsStringAsync(
                GetUrl<HomeController>(nameof(HomeController.Index))
            );

            //Assert
            response.ShouldNotBeNullOrEmpty();
        }
    }
}