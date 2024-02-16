import {mapProjectFromApiToVm} from './project.mapper';
import * as apiModel from './api/project.api-model';
import * as  viewModel from './project.vm';

describe('./src/pods/project/project.mapper.ts', () =>{
    it.only('should return empty employee object  when it passes undefined value', () => {
        const project: apiModel.Project = undefined;
        const result : viewModel.Project = mapProjectFromApiToVm(project);
        //Assert
        expect(result).toEqual(viewModel.createEmptyProject());
          
    })

})
