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

    it('should return expected result when it passes correct values', () =>{
        const employeeSummary:apiModel.EmployeeSummary [] = [
            {
              id: '1',
              employeeName: 'Katherine Paucar',
              isAssigned: true,
            },
            {
              id: '2',
              employeeName: 'Laura Sanchez',
              isAssigned: false,
            }
          ];
        const project: apiModel.Project = {
            id: '1',
            name: 'Test',
            isActive: true,
            comments: 'Test comment',
            externalId: '15262',
            employees: employeeSummary,
        }
        const expectedResultEmployee:viewModel.EmployeeSummary [] = [
            {
              id: '1',
              employeeName: 'Katherine Paucar',
              isAssigned: true,
            },
            {
              id: '2',
              employeeName: 'Laura Sanchez',
              isAssigned: false,
            }
          ];
        const expectedResult: viewModel.Project = {
            id: '1',
            name: 'Test',
            isActive: true,
            comments: 'Test comment',
            externalId: '15262',
            employees: expectedResultEmployee,
        }
        const result : viewModel.Project = mapProjectFromApiToVm(project);
        expect(result).toEqual(expectedResult);
    })

})
