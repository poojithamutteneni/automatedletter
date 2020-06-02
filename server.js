var PizZip = require('pizzip');
var Docxtemplater = require('docxtemplater');
var express = require('express');
var bodyParser =require('body-parser');
var app = express();
var urlencodedParser = bodyParser.urlencoded({ extended: true});
var fs = require('fs');
var path = require('path');
var urlencodedParser = bodyParser.urlencoded({ extended: true});
app.set('view engine', 'ejs');
var oc_attendance = require('./oc_attendance');
var campaigning = require('./campaigning');
var participantsattendance = require('./participantsattendance');
var conductevent=require('./conductevent');
var usehall = require('./usehall');
var conductmeet = require('./conductmeet');
var jsonfile = require('jsonfile');
var file = './details.json'
var base64Img = require('base64-img');
app.get('/'  , function(req,res){
  res.render('oc_attendance')
});
app.get('/ocattendance'  , function(req,res){
  res.render('oc_attendance')
});
app.get('/participantsattendance'  , function(req,res){
  res.render('participantsattendance')
});

app.get('/campaigning'  , function(req,res){
  res.render('campaigning')
});
app.get('/conductevent'  , function(req,res){
  res.render('conductevent')
});
app.get('/usehall'  , function(req,res){
  res.render('usehall')
});
app.get('/conductmeet'  , function(req,res){
  res.render('conductmeet')
});

app.post('/ocattendance' ,  urlencodedParser,function(req,res){
    let designation = req.body.designation;
    let department = req.body.department;
    let subject = req.body.subject;
    let date = req.body.date;
    let respects = req.body.respects;
    let team_name = req.body.team_name;
    let event_name = req.body.event_name;
    let fromdate = req.body.fromdate;
    let todate = req.body.todate;
    let start_hour=req.body.start_hour;
    let start_min=req.body.start_min;
    let start_meridian=req.body.start_meridian;
    let end_hour=req.body.end_hour;
    let end_min=req.body.end_min;
    let end_meridian=req.body.end_meridian;
    let time_start = req.body.time_start;
    let time_end = req.body.time_end;
    let letter_body = req.body.letter_body;
    var image = base64Img.base64Sync('2018-01-13-11-50-33-780.jpg');

    console.log(req.body);
    let details = {
               designation:designation,
                department: department,
                subject: subject,
                date: date,
                respects: respects,
                team_name: team_name,
                event_name: event_name,
                fromdate: fromdate,
                todate: todate,
                start_hour:start_hour,
                start_min:start_min,
               start_meridian:start_meridian,
               end_hour:end_hour,
                end_min:end_min,
                end_meridian:end_meridian,
                letter_body: letter_body,
                image:image

              }
              let data = JSON.stringify(details, null ,2);
             fs.writeFileSync('./details.json', data);
  oc_attendance.generateLetterIndividual();

});

app.post('/participantsattendance' ,  urlencodedParser,function(req,res){
    let designation = req.body.designation;
    let department = req.body.department;
    let subject = req.body.subject;
    let date = req.body.date;
    let respects = req.body.respects;
    let team_name = req.body.team_name;
    let event_name = req.body.event_name;
    let fromdate = req.body.fromdate;
    let todate = req.body.todate;
    let start_hour=req.body.start_hour;
    let start_min=req.body.start_min;
    let start_meridian=req.body.start_meridian;
    let end_hour=req.body.end_hour;
    let end_min=req.body.end_min;
    let end_meridian=req.body.end_meridian;
    let time_start = req.body.time_start;
    let time_end = req.body.time_end;
    let letter_body = req.body.letter_body;

    console.log(req.body);
    let details = {
                designation:designation,
                department: department,
                subject: subject,
                date: date,
                respects: respects,
                team_name: team_name,
                event_name: event_name,
                fromdate: fromdate,
                todate: todate,
                start_hour:start_hour,
                start_min:start_min,
               start_meridian:start_meridian,
               end_hour:end_hour,
                end_min:end_min,
                end_meridian:end_meridian,
                letter_body: letter_body

              }
              let data = JSON.stringify(details, null ,2);
             fs.writeFileSync('./details.json', data);
  participantsattendance.generateLetterIndividual();
res.download('./LetterGenerated/FINAL_ATTENDANCE_PARTICIPANTS.docx');
});

app.post('/conductevent' ,  urlencodedParser,function(req,res){


    let subject = req.body.subject;
    let date = req.body.date;
    let respects = req.body.respects;
    let team_name = req.body.team_name;
    let event_name = req.body.event_name;
    let hall_name = req.body.hall_name;
    let fromdate = req.body.fromdate;
    let todate = req.body.todate;
    let start_hour=req.body.start_hour;
    let start_min=req.body.start_min;
    let start_meridian=req.body.start_meridian;
    let end_hour=req.body.end_hour;
    let end_min=req.body.end_min;
    let end_meridian=req.body.end_meridian;
    let time_start = req.body.time_start;
    let time_end = req.body.time_end;
    let letter_body = req.body.letter_body;

    console.log(req.body);
    let details = {

                subject: subject,
                date: date,
                respects: respects,
                team_name: team_name,
                event_name: event_name,
                hall_name: hall_name,
                fromdate: fromdate,
                todate: todate,
                start_hour:start_hour,
                start_min:start_min,
               start_meridian:start_meridian,
               end_hour:end_hour,
                end_min:end_min,
                end_meridian:end_meridian,
                letter_body: letter_body

              }
              let data = JSON.stringify(details, null ,2);
             fs.writeFileSync('./details.json', data);
  conductevent.generateLetterIndividual();
res.download('./LetterGenerated/FINAL_CONDUCT_EVENT.docx');
});

app.post('/usehall' ,  urlencodedParser,function(req,res){


    let subject = req.body.subject;
    let date = req.body.date;
    let respects = req.body.respects;
    let team_name = req.body.team_name;
    let event_name = req.body.event_name;
    let reason = req.body.reason;
    let hall_name=req.body.hall_name;
    let fromdate = req.body.fromdate;
    let todate = req.body.todate;
    let start_hour=req.body.start_hour;
    let start_min=req.body.start_min;
    let start_meridian=req.body.start_meridian;
    let end_hour=req.body.end_hour;
    let end_min=req.body.end_min;
    let end_meridian=req.body.end_meridian;
    let time_start = req.body.time_start;
    let time_end = req.body.time_end;
    let letter_body = req.body.letter_body;

    console.log(req.body);
    let details = {

                subject: subject,
                date: date,
                respects: respects,
                team_name: team_name,
                event_name: event_name,
                reason:reason,
                hall_name:hall_name,
                fromdate: fromdate,
                todate: todate,
                start_hour:start_hour,
                start_min:start_min,
               start_meridian:start_meridian,
               end_hour:end_hour,
                end_min:end_min,
                end_meridian:end_meridian,
                letter_body: letter_body

              }
              let data = JSON.stringify(details, null ,2);
             fs.writeFileSync('./details.json', data);
  usehall.generateLetterIndividual();
res.download('./LetterGenerated/FINAL_HALL_UTILIZATION_PERMISSION.docx');
});

app.post('/campaigning' ,  urlencodedParser,function(req,res){
    let designation = req.body.designation;
    let department = req.body.department;
    let subject = req.body.subject;
    let date = req.body.date;
    let respects = req.body.respects;
    let team_name = req.body.team_name;
    let event_name = req.body.event_name;
    let fromdate = req.body.fromdate;
    let todate = req.body.todate;
    let start_hour=req.body.start_hour;
    let start_min=req.body.start_min;
    let start_meridian=req.body.start_meridian;
    let end_hour=req.body.end_hour;
    let end_min=req.body.end_min;
    let end_meridian=req.body.end_meridian;
    let letter_body = req.body.letter_body;
    let where = req.body.where

    console.log(req.body);
    let details = {
              designation:designation,
             department: department,
                subject: subject,
                date: date,
                respects: respects,
                team_name: team_name,
                event_name: event_name,
                fromdate: fromdate,
                todate: todate,
                start_hour:start_hour,
                start_min:start_min,
               start_meridian:start_meridian,
               end_hour:end_hour,
                end_min:end_min,
                end_meridian:end_meridian,
                letter_body: letter_body,
                where:where

              }
              let data = JSON.stringify(details, null ,2);
             fs.writeFileSync('./details.json', data);
  campaigning.generateLetterIndividual();
res.download('./LetterGenerated/FINAL_CAMPAIGNING.docx');
});

app.post('/conductmeet' ,  urlencodedParser,function(req,res){
    let designation = req.body.designation;
    let department = req.body.department;
    let subject = req.body.subject;
    let date = req.body.date;
    let respects = req.body.respects;
    let team_name = req.body.team_name;
    let event_name = req.body.event_name;
    let fromdate = req.body.fromdate;
    let hall_name = req.body.hall_name;
    let start_hour=req.body.start_hour;
    let start_min=req.body.start_min;
    let start_meridian=req.body.start_meridian;
    let end_hour=req.body.end_hour;
    let end_min=req.body.end_min;
    let end_meridian=req.body.end_meridian;
    let time_start = req.body.time_start;
    let time_end = req.body.time_end;
    let letter_body = req.body.letter_body;

    console.log(req.body);
    let details = {
                designation:designation,
                department: department,
                subject: subject,
                date: date,
                respects: respects,
                team_name: team_name,
                event_name: event_name,
                fromdate: fromdate,
                hall_name:hall_name,
                start_hour:start_hour,
                start_min:start_min,
               start_meridian:start_meridian,
               end_hour:end_hour,
                end_min:end_min,
                end_meridian:end_meridian,
                letter_body: letter_body

              }
              let data = JSON.stringify(details, null ,2);
             fs.writeFileSync('./details.json', data);
  conductmeet.generateLetterIndividual();
res.download('./LetterGenerated/FINAL_CONDUCT_MEET_PERMISSION.docx');
});



app.listen(9000, function(){
  console.log("server is listening");
});
