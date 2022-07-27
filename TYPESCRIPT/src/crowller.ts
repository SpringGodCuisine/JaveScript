import superagent from 'superagent';
import cheerio from 'cheerio';
import fs from 'fs';
import path from 'path';

interface Course{
    title:string;
    count:number;
}

interface CourseResult{ 
    time: number;
    data: Course[];
}

interface Content{
    [propName:number]:Course[]
}

class Crowller{
    private secret = 'x3b174jsx';
    private url =  
    `http://www.dell-lee.com/typescript/demo.html?secret=${this.secret}`;

    private filePath = path.resolve(__dirname, '../data/course.json');
    
    private rawHtml = '';

    getCourseInfo(html: string){
        const $ = cheerio.load(html);
        const courseItems = $('.course-item');
        const courseInfos:Course[] = [];
        courseItems.map((index, element) =>{
            const descs = $(element).find('.course-desc');
            const title = descs.eq(0).text();
            const count = parseInt(
                descs
                .eq(1)
                .text()
                .split('：')[1],
                10
            );
            courseInfos.push({title,count});
        });
        const result =  {
            time:new Date().getTime(),
            data:courseInfos
        }
        return result;
    }

    async getRawHtml(){
        const result = await superagent.get(this.url);
        return result.text;

    }

    generateJsonContent(courseInfo:CourseResult){
        let fileContent:Content = {};
        if(fs.existsSync(this.filePath))
        {
            fileContent = JSON.parse(fs.readFileSync(this.filePath, 'utf-8'));
        }
        fileContent[courseInfo.time] = courseInfo.data;
        fs.writeFileSync(this.filePath, JSON.stringify(fileContent));
    }

    async initSpiderProcess(){
        const html = await this.getRawHtml();
        const courseInfo = this.getCourseInfo(html);
        this.generateJsonContent(courseInfo);
    }

    constructor(){
        this.initSpiderProcess();
    }

}

const crowller = new Crowller();