import { TeaSession } from "./TeaSession";
import { BrewSessionType } from "./BrewSession";

const key = 'sessions';

const emptySessions = [
    {
        id: 1,
        name: '',
        color: '',
        brews: [],
    }

]

function init() {
    const json = JSON.stringify(emptySessions);
    localStorage.setItem(key, json)
    return json;
}

export function getSessions(): TeaSession[] {
    const json = localStorage.getItem(key) || init();
    const sessions = JSON.parse(json);
    return sessions;
}

export function newSession(tea: TeaSessionCurrent): TeaSession[] {
    const previous = getSessions();
    const teaSession = {
        ...tea,
        brews: [],
    }
    const sessions = [teaSession, ...previous];
    return set(sessions);
}

function set(sessions: TeaSession[]): TeaSession[] {
    const sessionsJSON = JSON.stringify(sessions);
    localStorage.setItem(key, sessionsJSON);
    return sessions;
}

export function storeSession(current: TeaSessionCurrent): TeaSession {
    const sessions = getSessions();
    const brews = getSessionBrews(current);
    const session = {
        ...current,
        brews
    };
    sessions[current.id - 1] = session;
    const sessionsJSON = JSON.stringify(sessions);
    localStorage.setItem(key, sessionsJSON);
    return session;
}

export function storeBrew(current: TeaSessionCurrent, brew: BrewSessionType): TeaSession {
    const sessions = getSessions();
    const i = current.id - 1;
    const session = sessions[i];

    const bi = brew.brewNumber - 1
    session.brews[bi] = brew;
    sessions[i] = session;
    set(sessions);

    return session;
}

function getSessionBrews(current: TeaSessionCurrent) {
    const sessions = getSessions();
    const i = current.id - 1;
    const brews = sessions[i].brews;
    return brews;
}


type TeaSessionCurrent = Pick<TeaSession, 'id' | 'name' | 'color'>;