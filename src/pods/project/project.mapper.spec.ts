import {mapProjectFromApiToVm} from './project.mapper';
import * as apiModel from './api/project.api-model';
import * as  viewModel from './project.vm';

describe('./src/pods/project/project.mapper.ts', () =>{
    it('should return empty employee object  when it passes undefined value', () => {        
        //Arrage
        const project: apiModel.Project = undefined;
        //Act       
        const result : viewModel.Project = mapProjectFromApiToVm(project);
        //Assert
        expect(result).toEqual(viewModel.createEmptyProject());
          
    });
    it('should return empty employee object  when it passes null value', () => {
        //Arrage
        const project: apiModel.Project = null;

        //Act
        const result : viewModel.Project = mapProjectFromApiToVm(project);
        //Assert
        expect(result).toEqual(viewModel.createEmptyProject());
          
    });

})
