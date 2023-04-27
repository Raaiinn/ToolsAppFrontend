import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { ToolsComponent } from './tools.component';
import { FilterByNamePipe } from '../filters/filter-by-name.pipe';
import { FilterByBrandPipe } from '../filters/filter-by-brand.pipe';
import { FormsModule } from '@angular/forms';

describe('ToolsComponent', () => {
  let component: ToolsComponent;
  let fixture: ComponentFixture<ToolsComponent>;
  

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ 
        ToolsComponent,
        FilterByNamePipe,
        FilterByBrandPipe
      ],
      imports: [
        HttpClientModule,
        FormsModule
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
