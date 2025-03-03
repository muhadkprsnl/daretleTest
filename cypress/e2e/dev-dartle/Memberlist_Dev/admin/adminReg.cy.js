import { adminInfo } from "../../../sample/Dev_Component/MemberList_C/adminReg/adminInfo.ts"
import { addionalInfo } from "../../../sample/Dev_Component/MemberList_C/adminReg/additionalInfo.ts"
import { navigation } from "../../../sample/Dev_Component/MemberList_C/adminReg/navigation.ts"
import { addAdminClass } from "../../../sample/Dev_Component/MemberList_C/adminReg/addAdmin.ts"
import { randomDetails } from "../../../sample/Dev_Component/MemberList_C/adminReg/randomdetails.ts"
import { File } from "../../../sample/Pro_Component/pro-PI/regComponents/File.ts"


describe('Pending Invites', () => {
    const adminPIInfo = new adminInfo();
    const adminAdditionalInfo = new addionalInfo();
    const PI_nav = new navigation();
    const addAddmin = new addAdminClass();
    const randomDetail = new randomDetails();
    const file = new File();

    beforeEach(() => {
        // Assuming cy.login is a valid custom command
        cy.intercept('GET', '/ngsw.json*', { statusCode: 404 });
        //cy.login('support@dartle.app', 'P@ssw0rd');
    });





    xit('should navigate to the pending invites page', () => {
        adminPIInfo.enterPersonalInfo('stara@12.com321', 'Hosge', 'Manes', 'username', 'Female')
        adminAdditionalInfo.addionalInformation();
        addAddmin.addMember();


    });

    it('Verify that Enter the Invalid Email.', () => {
        adminPIInfo.enterPersonalInfo('MNAPOoUTY', 'Jaanqe', 'Georqge', 'username', 'Female')
        addAddmin.checkfunction();

    });


    it('Verify that Enter the Duplicate Email.', () => {
        adminPIInfo.visitPendinginvites();
        adminPIInfo.enterEmail('replace@mail.com')
        adminPIInfo.clickDate();
        adminPIInfo.duplicateMailWarning();
        adminPIInfo.dtdupliactemail();
        // adminPIInfo.isformsdisabled();

    });

    it('Verify that Enter the Invalid DOB.', () => {
        adminPIInfo.visitPendinginvites();
        randomDetail.randomEmail();
        adminPIInfo.selectDate(2024, 'Jan', 15);
        adminPIInfo.underageWarning();
        randomDetail.randomStudentName();
        randomDetail.randomGender()
        addAddmin.checkfunction();
        adminPIInfo.underageWarning();

    });

    it('Verify that Enter the invalid First Name.', () => {
        adminPIInfo.visitPendinginvites();
        randomDetail.randomEmail();
        adminPIInfo.selectDate(2000, 'Jan', 15);
        randomDetail.randomLname();
        //adminPIInfo.enterUsername();
        randomDetail.randomGender();
        addAddmin.checkfunction();
        adminPIInfo.dtfname();
    });

    it('Verify that Enter the Invalid First name with blank spcae.', () => {
        adminPIInfo.enterPersonalInfo('MNAPOUTY', '   ', 'Georqge', 'username', 'Female')
        addAddmin.checkfunction();
        adminPIInfo.invalidDetailsWarning();

    });

    it('Verify that Enter the invalid User Name.', () => {
        adminPIInfo.visitPendinginvites();
        adminPIInfo.selectDate(2000, 'Jan', 15);
        randomDetail.randomStudentName();
        adminPIInfo.clearUsername()
        randomDetail.randomGender()
        addAddmin.checkfunction();
        adminPIInfo.invalidDetailsWarning();

    });



    it('Verify that Enter the Duplicate User Name.', () => {
        adminPIInfo.visitPendinginvites();
        adminPIInfo.selectDate(2000, 'Jan', 15);
        randomDetail.randomStudentName();
        adminPIInfo.duplicateUsername();
        randomDetail.randomGender()
        addAddmin.checkfunction();
        adminPIInfo.invalidDetailsWarning();
        adminPIInfo.dtUsername();

    });

    it('Verify that Enter the invalid Gender.', () => {
        adminPIInfo.visitPendinginvites();
        adminPIInfo.selectDate(2000, 'Jan', 15);
        randomDetail.randomStudentName();
        addAddmin.checkfunction();
        adminPIInfo.invalidDetailsWarning();
        adminPIInfo.dtGender();

    });


    //File Uploading >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

    it('Upload a specific file dynamically', () => {
        adminPIInfo.visitPendinginvites(); // Navigate to the page
        file.clickUploadFile('PDF'); // Upload the "Sample-pdf.pdf" file
        file.uploadSuccessMsg();
        file.clickUploadFile('PNG'); // Upload the "testfile-jpg.jpg" file
        file.uploadSuccessMsg();
        file.clickUploadFile('JPG'); // Upload the "testfile.txt" file
        file.uploadSuccessMsg();
        file.clickUploadFile('WEBM');
        file.uploadFailedMsg();
        // Optionally, you can upload other files by calling the method with a different key
        // file2.clickUploadFile1('testjpg'); // Upload the "testfile-jpg.jpg" file
        // file2.clickUploadFile1('testfile'); // Upload the "testfile.txt" file
    });

    it('Upload a Invalid file dynamically', () => {
        adminPIInfo.visitPendinginvites(); // Navigate to the page
        file.clickUploadFile('WEBM');
        file.uploadFailedMsg();
    })

    it('Verify Delete Uploaded file', () => {
        adminPIInfo.visitPendinginvites(); // Navigate to the page
        file.clickUploadFile('PDF');
        file.deleteUploadedFile();
    });

    it('Verify Cancel popup of Deletion file', () => {
        adminPIInfo.visitPendinginvites(); // Navigate to the page
        file.clickUploadFile('PDF');
        file.canceldltPopup();
    });

    //additional Info >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


    //Physical Info  >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
    it('Verify that Valid Physical Info', () => {
        adminPIInfo.visitPendinginvites(); // Navigate to the page
        randomDetail.randomStudentInfo();
        adminPIInfo.selectDate(2000, 'Jan', 15);
        adminAdditionalInfo.clickAdditionalInfo();
        adminAdditionalInfo.enterPhysicalHeight('abc1');
        adminAdditionalInfo.enterPhysicalWeight('abc1');
        addAddmin.checkfunction();
    });

    // it.only('Verify that Valid Physical Info', () => {
    //     adminPIInfo.visitPendinginvites(); // Navigate to the page
    //     // randomDetail.randomStudentInfo();
    //     // adminPIInfo.selectDate(2000, 'Jan', 15);
    //     adminAdditionalInfo.clickAdditionalInfo();
    //     adminAdditionalInfo.enterPhysicalHeight(' ');
    //     adminAdditionalInfo.enterPhysicalWeight(' ');
    //     addAddmin.checkfunction();
    // });

    //Sports Info  >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
    it('Verify that Valid Sports Info', () => {
        adminPIInfo.visitPendinginvites(); // Navigate to the page
        // randomDetail.randomStudentInfo();
        // adminPIInfo.selectDate(2000, 'Jan', 15);
        adminAdditionalInfo.clickAdditionalInfo();
        adminAdditionalInfo.sport('Tennis', 'Attacker')
        addAddmin.checkfunction();
    });


    //Address Info  >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
    it('Verify that Valid Address Info', () => {
        adminPIInfo.visitPendinginvites(); // Navigate to the page
        // randomDetail.randomStudentInfo();
        // adminPIInfo.selectDate(2000, 'Jan', 15);
        adminAdditionalInfo.clickAdditionalInfo();
        adminAdditionalInfo.addressInfo('Wal', '101 street', 'Barnsl', 'South City', 'M8 0JB')
        addAddmin.checkfunction();
    });

    //Educational history  >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
    it('Verify that Valid Educational Info', () => {
        adminPIInfo.visitPendinginvites(); // Navigate to the page
        // randomDetail.randomStudentInfo();
        // adminPIInfo.selectDate(2000, 'Jan', 15);
        adminAdditionalInfo.clickAdditionalInfo();
        adminAdditionalInfo.educationalINfo("Harvard", "Btech", "2001", "2004")
        //addAddmin.checkfunction();
    })

    it('Verify that Invalid  Institute with Blank Space', () => {
        adminPIInfo.visitPendinginvites(); // Navigate to the page
        // randomDetail.randomStudentInfo();
        // adminPIInfo.selectDate(2000, 'Jan', 15);
        adminAdditionalInfo.clickAdditionalInfo();
        adminAdditionalInfo.enterInstitute("   ")
        adminAdditionalInfo.enterDiscipline("Good");
        adminAdditionalInfo.enterEduStartyear("2001");
        adminAdditionalInfo.enterEduEndyear("2004")
        adminAdditionalInfo.verifySaveBtnDisabled();

    })

    it('Verify that Empty Empty Info', () => {
        adminPIInfo.visitPendinginvites(); // Navigate to the page
        // randomDetail.randomStudentInfo();
        // adminPIInfo.selectDate(2000, 'Jan', 15);
        adminAdditionalInfo.clickAdditionalInfo();
        adminAdditionalInfo.enterDiscipline("Good");
        adminAdditionalInfo.enterEduStartyear("2001");
        adminAdditionalInfo.enterEduEndyear("2004")
        adminAdditionalInfo.verifySaveBtnDisabled();
    })

    it('Verify that Invalid Displine with Blank Space', () => {
        adminPIInfo.visitPendinginvites(); // Navigate to the page
        // randomDetail.randomStudentInfo();
        // adminPIInfo.selectDate(2000, 'Jan', 15);
        adminAdditionalInfo.clickAdditionalInfo();
        adminAdditionalInfo.enterInstitute("M G University")
        adminAdditionalInfo.enterDiscipline("   ");
        adminAdditionalInfo.enterEduStartyear("2001");
        adminAdditionalInfo.enterEduEndyear("2004")
        adminAdditionalInfo.verifySaveBtnDisabled();
    })

    it('Verify that Empty Displine ', () => {
        adminPIInfo.visitPendinginvites(); // Navigate to the page
        // randomDetail.randomStudentInfo();
        // adminPIInfo.selectDate(2000, 'Jan', 15);
        adminAdditionalInfo.clickAdditionalInfo();
        adminAdditionalInfo.enterInstitute("M G University")
        adminAdditionalInfo.enterEduStartyear("2001");
        adminAdditionalInfo.enterEduEndyear("2004")
        adminAdditionalInfo.verifySaveBtnDisabled();
    })

    it('Verify that Invalid Educational Empty Start Year ', () => {
        adminPIInfo.visitPendinginvites(); // Navigate to the page
        // randomDetail.randomStudentInfo();
        // adminPIInfo.selectDate(2000, 'Jan', 15);
        adminAdditionalInfo.clickAdditionalInfo();
        adminAdditionalInfo.enterInstitute("M G University")
        adminAdditionalInfo.enterDiscipline("Good");
        adminAdditionalInfo.enterEduEndyear("2004")
        adminAdditionalInfo.verifySaveBtnDisabled();

    })


    it('Verify that Invalid Educational Invalid Start Year ', () => {
        adminPIInfo.visitPendinginvites(); // Navigate to the page
        // randomDetail.randomStudentInfo();
        // adminPIInfo.selectDate(2000, 'Jan', 15);
        adminAdditionalInfo.clickAdditionalInfo();
        adminAdditionalInfo.enterInstitute("M G University")
        adminAdditionalInfo.enterDiscipline("Good");
        adminAdditionalInfo.enterEduStartyear("200");
        adminAdditionalInfo.enterEduEndyear("2004")
        adminAdditionalInfo.dtStartYearValidation();
        adminAdditionalInfo.verifySaveBtnDisabled();

    })

    it('Verify that Invalid Educational Empty End Year ', () => {
        adminPIInfo.visitPendinginvites(); // Navigate to the page
        // randomDetail.randomStudentInfo();
        // adminPIInfo.selectDate(2000, 'Jan', 15);
        adminAdditionalInfo.clickAdditionalInfo();
        adminAdditionalInfo.enterInstitute("M G University")
        adminAdditionalInfo.enterDiscipline("Good");
        adminAdditionalInfo.enterEduStartyear("2001");
        adminAdditionalInfo.verifySaveBtnDisabled();

    })


    it('Verify that Invalid Educational Invalid End Year ', () => {
        adminPIInfo.visitPendinginvites(); // Navigate to the page
        // randomDetail.randomStudentInfo();
        // adminPIInfo.selectDate(2000, 'Jan', 15);
        adminAdditionalInfo.clickAdditionalInfo();
        adminAdditionalInfo.enterInstitute("M G University")
        adminAdditionalInfo.enterDiscipline("Good");
        adminAdditionalInfo.enterEduEndyear("200");
        adminAdditionalInfo.enterEduStartyear("2000");
        adminAdditionalInfo.dtEndYearValidation();
        adminAdditionalInfo.verifySaveBtnDisabled();

    })

    it('Verify that Educational Invalid Start Year  and End Year ', () => {
        adminPIInfo.visitPendinginvites(); // Navigate to the page
        // randomDetail.randomStudentInfo();
        // adminPIInfo.selectDate(2000, 'Jan', 15);
        adminAdditionalInfo.clickAdditionalInfo();
        adminAdditionalInfo.enterInstitute("M G University")
        adminAdditionalInfo.enterDiscipline("Good");
        adminAdditionalInfo.enterEduStartyear("2005");
        adminAdditionalInfo.enterEduEndyear("2000");
        adminAdditionalInfo.dtYearValidation();
        adminAdditionalInfo.verifySaveBtnDisabled();
    })


    //Career Info >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
    it('Verify that Valid Career Info', () => {
        adminPIInfo.visitPendinginvites(); // Navigate to the page
        // randomDetail.randomStudentInfo();
        // adminPIInfo.selectDate(2000, 'Jan', 15);
        adminAdditionalInfo.clickAdditionalInfo();
        adminAdditionalInfo.careerINfo('Mariyam FA', 'Head Coach', '2000', 'Jun', '17', '2004', 'Nov', '17')
        addAddmin.checkfunction();
    })

    it('Verify that Invalid  Academy with Blank Space', () => {
        adminPIInfo.visitPendinginvites(); // Navigate to the page
        // randomDetail.randomStudentInfo();
        // adminPIInfo.selectDate(2000, 'Jan', 15);
        adminAdditionalInfo.clickAdditionalInfo();
        adminAdditionalInfo.enterAcademy("   ");
        adminAdditionalInfo.enterRole("Head Coach");
        adminAdditionalInfo.selectCareerStDate('2000', 'Jun', '17');
        adminAdditionalInfo.selectCareerEndDate('2004', 'Nov', '17');
        adminAdditionalInfo.isCareerSavebtnDisabled();

    })

    it('Verify that Empty Academy Info', () => {
        adminPIInfo.visitPendinginvites(); // Navigate to the page
        // randomDetail.randomStudentInfo();
        // adminPIInfo.selectDate(2000, 'Jan', 15);
        adminAdditionalInfo.clickAdditionalInfo();
        adminAdditionalInfo.enterRole("Head Coach");
        adminAdditionalInfo.selectCareerStDate('2000', 'Jun', '17');
        adminAdditionalInfo.selectCareerEndDate('2004', 'Nov', '17');
        adminAdditionalInfo.isCareerSavebtnDisabled();

    })

    it('Verify that Invalid Displine with Blank Space', () => {
        adminPIInfo.visitPendinginvites(); // Navigate to the page
        // randomDetail.randomStudentInfo();
        // adminPIInfo.selectDate(2000, 'Jan', 15);
        adminAdditionalInfo.clickAdditionalInfo();
        adminAdditionalInfo.enterAcademy("Mariyam FA");
        adminAdditionalInfo.enterRole("   ");
        adminAdditionalInfo.selectCareerStDate('2000', 'Jun', '17');
        adminAdditionalInfo.selectCareerEndDate('2004', 'Nov', '17');
        adminAdditionalInfo.isCareerSavebtnDisabled();
    })

    it('Verify that Empty Displine ', () => {
        adminPIInfo.visitPendinginvites(); // Navigate to the page
        // randomDetail.randomStudentInfo();
        // adminPIInfo.selectDate(2000, 'Jan', 15);
        adminAdditionalInfo.clickAdditionalInfo();
        adminAdditionalInfo.enterAcademy("Mariyam FA");
        adminAdditionalInfo.selectCareerStDate('2000', 'Jun', '17');
        adminAdditionalInfo.selectCareerEndDate('2004', 'Nov', '17');
        adminAdditionalInfo.isCareerSavebtnDisabled();
    })

    it('Verify that Invalid Careers Empty Start Year ', () => {
        adminPIInfo.visitPendinginvites(); // Navigate to the page
        // randomDetail.randomStudentInfo();
        // adminPIInfo.selectDate(2000, 'Jan', 15);
        adminAdditionalInfo.clickAdditionalInfo();
        adminAdditionalInfo.enterAcademy("Mariyam FA");
        adminAdditionalInfo.enterRole("Head Coach");
        adminAdditionalInfo.selectCareerEndDate('2004', 'Nov', '17');
        adminAdditionalInfo.isCareerSavebtnDisabled();

    })

    it('Verify that Invalid Careers Empty End Year ', () => {
        adminPIInfo.visitPendinginvites(); // Navigate to the page
        // randomDetail.randomStudentInfo();
        // adminPIInfo.selectDate(2000, 'Jan', 15);
        adminAdditionalInfo.clickAdditionalInfo();
        adminAdditionalInfo.enterAcademy("Mariyam FA");
        adminAdditionalInfo.enterRole("Head Coach");
        adminAdditionalInfo.selectCareerStDate('2000', 'Jun', '17');
        adminAdditionalInfo.isCareerSavebtnDisabled();

    })

    it('Verify that Invalid Careers Start Year  and End Year ', () => {
        adminPIInfo.visitPendinginvites(); // Navigate to the page
        // randomDetail.randomStudentInfo();
        // adminPIInfo.selectDate(2000, 'Jan', 15);
        adminAdditionalInfo.clickAdditionalInfo();
        adminAdditionalInfo.enterAcademy("Mariyam FA");
        adminAdditionalInfo.enterRole("Head Coach");
        adminAdditionalInfo.selectCareerStDate('2004', 'Nov', '17');
        adminAdditionalInfo.selectCareerEndDate('2004', 'Nov', '1');
        adminAdditionalInfo.dtCareerYearValidation();
        adminAdditionalInfo.isCareerSavebtnDisabled();
    })

    //Achievements >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
    it('Verify that Valid Achievements', () => {
        adminPIInfo.visitPendinginvites(); // Navigate to the page
        // randomDetail.randomStudentInfo();
        // adminPIInfo.selectDate(2000, 'Jan', 15);
        adminAdditionalInfo.clickAdditionalInfo();
        adminAdditionalInfo.achievementINfo('Shield Cup', 'Man of the Match', '2008');
        addAddmin.checkfunction();
    })

    it('Verify that Invalid  Event with Blank Space', () => {
        adminPIInfo.visitPendinginvites(); // Navigate to the page
        // randomDetail.randomStudentInfo();
        // adminPIInfo.selectDate(2000, 'Jan', 15);
        adminAdditionalInfo.clickAdditionalInfo();
        adminAdditionalInfo.enterEvent("   ");
        adminAdditionalInfo.enterAchievements('Man of the Match');
        adminAdditionalInfo.enterAchievementYear('2008');
        adminAdditionalInfo.isAchievementSavebtnDisabled()

    })

    it('Verify that Empty Event', () => {
        adminPIInfo.visitPendinginvites(); // Navigate to the page
        // randomDetail.randomStudentInfo();
        // adminPIInfo.selectDate(2000, 'Jan', 15);
        adminAdditionalInfo.clickAdditionalInfo();
        adminAdditionalInfo.enterAchievements('Man of the Match');
        adminAdditionalInfo.enterAchievementYear('2008');
        adminAdditionalInfo.isAchievementSavebtnDisabled()

    })

    it('Verify that Invalid Achievement with Blank Space', () => {
        adminPIInfo.visitPendinginvites(); // Navigate to the page
        // randomDetail.randomStudentInfo();
        // adminPIInfo.selectDate(2000, 'Jan', 15);
        adminAdditionalInfo.clickAdditionalInfo();
        adminAdditionalInfo.enterEvent("'Shield Cup'");
        adminAdditionalInfo.enterAchievements("   ");
        adminAdditionalInfo.enterAchievementYear('2008');
        adminAdditionalInfo.isAchievementSavebtnDisabled()

    })

    it('Verify that Empty Achievement ', () => {
        adminPIInfo.visitPendinginvites(); // Navigate to the page
        // randomDetail.randomStudentInfo();
        // adminPIInfo.selectDate(2000, 'Jan', 15);
        adminAdditionalInfo.clickAdditionalInfo();
        adminAdditionalInfo.enterEvent('Shield Cup');
        adminAdditionalInfo.enterAchievementYear('2008');
        adminAdditionalInfo.isAchievementSavebtnDisabled()

    })

    it('Verify that Invalid Achievement Year with Blank Space', () => {
        adminPIInfo.visitPendinginvites(); // Navigate to the page
        // randomDetail.randomStudentInfo();
        // adminPIInfo.selectDate(2000, 'Jan', 15);
        adminAdditionalInfo.clickAdditionalInfo();
        adminAdditionalInfo.enterEvent('Shield Cup');
        adminAdditionalInfo.enterAchievements('Man of the Match');
        adminAdditionalInfo.enterAchievementYear('  ');
        adminAdditionalInfo.isAchievementSavebtnDisabled();

    })

    it('Verify that Invalid Achievement Empty Year ', () => {
        adminPIInfo.visitPendinginvites(); // Navigate to the page
        // randomDetail.randomStudentInfo();
        // adminPIInfo.selectDate(2000, 'Jan', 15);
        adminAdditionalInfo.clickAdditionalInfo();
        adminAdditionalInfo.enterEvent('Shield Cup');
        adminAdditionalInfo.enterAchievements('Man of the Match');
        adminAdditionalInfo.isAchievementSavebtnDisabled();

    })
});