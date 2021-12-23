import React from 'react'

export default function urlValidator() {
    return (
        <div>
            
        </div>
    )
}
export function makeHttpRequestUrl(domain, paths, method, body ) {
    if(method === 'GET') {
        if(typeof body.name === 'undefined') {
            const path = paths.replace(' ', '/');
            return domain+'/'+path
        }else {
            const path = paths.replace(' ', '/');
            return domain+'/'+path+'?name='+body.name+'&course='+body.course
        }
    }
    if(method === 'POST') {
        if(typeof body.name === 'undefined') {
            return 'Enter a body'
        }else {
            return domain+'/'+paths
        }
    }
    if(method === 'PUT') {
        if(typeof body.name === 'undefined') {
            return 'Enter a body'
        }else {
            return domain+'/'+paths
        }
    }
}