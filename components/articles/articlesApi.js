'use strict';
import _ from 'lodash';

class ArticlesApi {
    constructor(){
        this.articles = [];
    }
    
    getArticles(){
        if(this.articles.length==0){
            this.articles = [
                {
                    id : 1,
                    title : 'C# Fundamentals',
                    description : 'A brief tutorial on c#',
                    author : 'Aryan Katoch',
                    sourceUrl : 'http://wwww.aryankatoch.com',
                    publishDate : new Date(2016,2,12),
                    tags : 'C#',
                    category : 'Programming Language'
                },
                {
                    id : 2,
                    title : 'WPF Fundamentals',
                    description : 'WPF Description',
                    author : 'Balwinder Katoch',
                    sourceUrl : 'http://www.balwinderkatoch.com',
                    publishDate : new Date(2015,10,4),
                    tags : 'C#, WPF',
                    category : 'Desktop'
                },
                {
                    id : 3,
                    title : 'Asp.Net Fundamentals',
                    description : 'ASP.Net Web Development',
                    author : 'Cory House',
                    sourceUrl : 'http://www.coryhouse.com',
                    publishDate : new Date(2013,12,4),
                    tags : 'C#, ASP.Net, MVC',
                    category : 'Web'
                },
                {
                    id : 4,
                    title : 'WebApi Fundamentals',
                    description : 'Web-Api Web Development',
                    author : 'Cory House',
                    sourceUrl : 'http://www.coryhouse.com',
                    publishDate : new Date(2013,12,4),
                    tags : 'C#, ASP.Net, MVC',
                    category : 'Web'
                }
            ];
        }
        return this.articles;
    }
    saveArticle(article) {
        if(article.id == 0) {
            let nid = this.articles.length;
            while(true) {
                const existingArticle = _.find(this.articles, {id: nid});
                if(!existingArticle) break;
                nid++;
            }
            article.id=nid;
            this.articles.push(article);
        } else {
            const existingArticle = _.find(this.articles, {id: article.id});
			var existingAuthorIndex = _.indexOf(this.articles, existingAuthor); 
			this.articles.splice(existingAuthorIndex, 1, article);
        }
    }
    getNewArticle(){
        return {
            id : 0,
            title : '',
            description : '',
            author : '',
            sourceUrl : '',
            publishDate : new Date(),
            tags : '',
            category : ''
        };
    }
    getArticle(id){
        let item = this.articles.find(article=> article.id==id);
        return item;
    }

}

export default new ArticlesApi();