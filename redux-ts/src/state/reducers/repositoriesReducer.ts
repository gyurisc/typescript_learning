interface RepositoriesState {
    loading: boolean; 
    error: string | null; 
    data: string[]; 
}

const reducer = (state : RepositoriesState, action: any) => {
    switch (action.type) {
        case 'search_repositories':
            return { loading: true, erro: null, data: [] };
        case 'search_repositories_success':                
            return { loading: false, erro: null, data: action.payload };
        case 'search_repositories_error':
            return { loading: false, erro: action.payload, data: [] };
        default: 
            return state; 
    }
};

export default reducer; 